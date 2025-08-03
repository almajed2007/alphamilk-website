import { Connection, Keypair, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import {
  createInitializeMintInstruction,
  createMintToInstruction,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getMinimumBalanceForRentExemptMint,
  createCreateMetadataAccountV3Instruction,
  PROGRAM_ID as METADATA_PROGRAM_ID,
} from "@solana/spl-token"

export interface TokenCreationParams {
  name: string
  symbol: string
  description: string
  supply: number
  decimals: number
  image?: string
  website?: string
  twitter?: string
  telegram?: string
}

export interface CreatedTokenInfo {
  mintAddress: string
  tokenAccountAddress: string
  signature: string
  metadataAddress?: string
}

export class SolanaTokenCreator {
  private connection: Connection

  constructor(rpcUrl = "https://api.mainnet-beta.solana.com") {
    this.connection = new Connection(rpcUrl, "confirmed")
  }

  async createToken(
    params: TokenCreationParams,
    payerKeypair: Keypair,
    mintKeypair?: Keypair,
  ): Promise<CreatedTokenInfo> {
    try {
      // Generate mint keypair if not provided
      const mint = mintKeypair || Keypair.generate()

      // Get minimum balance for rent exemption
      const rentExemptBalance = await getMinimumBalanceForRentExemptMint(this.connection)

      // Get associated token account address
      const associatedTokenAddress = await getAssociatedTokenAddress(mint.publicKey, payerKeypair.publicKey)

      // Create transaction
      const transaction = new Transaction()

      // Add instruction to create mint account
      transaction.add(
        SystemProgram.createAccount({
          fromPubkey: payerKeypair.publicKey,
          newAccountPubkey: mint.publicKey,
          space: MINT_SIZE,
          lamports: rentExemptBalance,
          programId: TOKEN_PROGRAM_ID,
        }),
      )

      // Add instruction to initialize mint
      transaction.add(
        createInitializeMintInstruction(
          mint.publicKey,
          params.decimals,
          payerKeypair.publicKey,
          payerKeypair.publicKey,
        ),
      )

      // Add instruction to create associated token account
      transaction.add(
        createAssociatedTokenAccountInstruction(
          payerKeypair.publicKey,
          associatedTokenAddress,
          payerKeypair.publicKey,
          mint.publicKey,
        ),
      )

      // Add instruction to mint tokens
      transaction.add(
        createMintToInstruction(
          mint.publicKey,
          associatedTokenAddress,
          payerKeypair.publicKey,
          params.supply * Math.pow(10, params.decimals),
        ),
      )

      // Add metadata if Metaplex is available
      let metadataAddress: PublicKey | undefined
      try {
        metadataAddress = await this.createTokenMetadata(transaction, mint.publicKey, payerKeypair.publicKey, params)
      } catch (error) {
        console.warn("Could not create metadata:", error)
      }

      // Get recent blockhash
      const { blockhash } = await this.connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = payerKeypair.publicKey

      // Sign transaction
      transaction.sign(payerKeypair, mint)

      // Send transaction
      const signature = await this.connection.sendRawTransaction(transaction.serialize(), {
        skipPreflight: false,
        preflightCommitment: "confirmed",
      })

      // Confirm transaction
      await this.connection.confirmTransaction(signature, "confirmed")

      return {
        mintAddress: mint.publicKey.toString(),
        tokenAccountAddress: associatedTokenAddress.toString(),
        signature,
        metadataAddress: metadataAddress?.toString(),
      }
    } catch (error) {
      console.error("Token creation failed:", error)
      throw new Error(`Failed to create token: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  private async createTokenMetadata(
    transaction: Transaction,
    mint: PublicKey,
    payer: PublicKey,
    params: TokenCreationParams,
  ): Promise<PublicKey> {
    // Find metadata PDA
    const [metadataAddress] = PublicKey.findProgramAddressSync(
      [Buffer.from("metadata"), METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      METADATA_PROGRAM_ID,
    )

    // Create metadata account instruction
    const metadataInstruction = createCreateMetadataAccountV3Instruction(
      {
        metadata: metadataAddress,
        mint: mint,
        mintAuthority: payer,
        payer: payer,
        updateAuthority: payer,
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: params.name,
            symbol: params.symbol,
            uri: params.image || "",
            sellerFeeBasisPoints: 0,
            creators: [
              {
                address: payer,
                verified: true,
                share: 100,
              },
            ],
            collection: null,
            uses: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      },
    )

    transaction.add(metadataInstruction)
    return metadataAddress
  }

  async getTokenInfo(mintAddress: string) {
    try {
      const mintPublicKey = new PublicKey(mintAddress)
      const mintInfo = await this.connection.getParsedAccountInfo(mintPublicKey)

      if (!mintInfo.value) {
        throw new Error("Token not found")
      }

      return mintInfo.value
    } catch (error) {
      console.error("Failed to get token info:", error)
      throw error
    }
  }

  async estimateCreationCost(): Promise<number> {
    try {
      const rentExemptBalance = await getMinimumBalanceForRentExemptMint(this.connection)
      const associatedTokenAccountRent = await this.connection.getMinimumBalanceForRentExemption(165)
      const transactionFee = 5000 // Approximate transaction fee in lamports

      return (rentExemptBalance + associatedTokenAccountRent + transactionFee) / LAMPORTS_PER_SOL
    } catch (error) {
      console.error("Failed to estimate creation cost:", error)
      return 0.01 // Fallback estimate
    }
  }
}

// Utility function to copy token parameters from trending token
export function generateCopiedTokenParams(originalToken: any, customization: any): TokenCreationParams {
  return {
    name: customization.name || `Alpha${originalToken.name}`,
    symbol: customization.symbol || `A${originalToken.symbol}`,
    description: customization.description || `The alpha version of ${originalToken.name}`,
    supply: customization.supply || 1000000000,
    decimals: customization.decimals || 9,
    image: customization.image,
    website: customization.website,
    twitter: customization.twitter,
    telegram: customization.telegram,
  }
}
