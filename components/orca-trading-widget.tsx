"use client"

// components/orca-trading-widget.tsx

import type React from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { Connection, PublicKey } from "@solana/web3.js"
import { OrcaPool } from "@orca-so/sdk"

const validateSolanaAddress = (address: string): boolean => {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
  return base58Regex.test(address)
}

const CONTRACT_ADDRESS_STRING = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK"

const OrcaTradingWidget: React.FC = () => {
  const wallet = useWallet()
  const connection = new Connection("https://api.mainnet-beta.solana.com")

  // Validate before creating PublicKey
  if (!validateSolanaAddress(CONTRACT_ADDRESS_STRING)) {
    console.error("Invalid contract address in Orca widget:", CONTRACT_ADDRESS_STRING)
    return <div>Invalid contract address</div>
  }

  const newContractAddress = new PublicKey(CONTRACT_ADDRESS_STRING)
  const orcaUrl = `https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=${CONTRACT_ADDRESS_STRING}`

  const fetchPoolData = async () => {
    if (!wallet.publicKey) {
      console.log("Wallet not connected")
      return
    }

    try {
      const pool = await OrcaPool.load(connection, newContractAddress)
      console.log("Pool data:", pool)
    } catch (error) {
      console.error("Error fetching pool data:", error)
    }
  }

  const handleSwap = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS_STRING)) {
      alert("Invalid token address. Cannot proceed with swap.")
      return
    }
    window.open(orcaUrl, "_blank")
  }

  const handleWidgetClick = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS_STRING)) {
      alert("Invalid token address. Cannot open widget.")
      return
    }
    window.open(orcaUrl, "_blank")
  }

  return (
    <div>
      <h1>Orca Trading Widget</h1>
      <button onClick={fetchPoolData}>Fetch Pool Data</button>
      <button onClick={handleSwap}>Swap Tokens</button>
      <button onClick={handleWidgetClick}>Open Orca Widget</button>
    </div>
  )
}

export default OrcaTradingWidget
