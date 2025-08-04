/**
 * Validates Solana wallet/token addresses
 */

export const validateSolanaAddress = (address: string): boolean => {
  if (!address || typeof address !== "string") {
    return false
  }

  // Solana addresses are base58 encoded and typically 32-44 characters long
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/

  // Basic format validation
  if (!base58Regex.test(address)) {
    return false
  }

  // Additional length validation (Solana addresses are usually 32-44 chars)
  if (address.length < 32 || address.length > 44) {
    return false
  }

  return true
}

export const validateTokenMintAddress = (address: string): boolean => {
  // Token mint addresses follow the same format as regular Solana addresses
  return validateSolanaAddress(address)
}

export const formatAddressForDisplay = (address: string, startChars = 8, endChars = 8): string => {
  if (!validateSolanaAddress(address)) {
    return "Invalid Address"
  }

  if (address.length <= startChars + endChars) {
    return address
  }

  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

export const MILK_TOKEN_ADDRESS = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK"

// Validate the main token address on module load
if (!validateSolanaAddress(MILK_TOKEN_ADDRESS)) {
  console.error("Invalid MILK token address format:", MILK_TOKEN_ADDRESS)
}
