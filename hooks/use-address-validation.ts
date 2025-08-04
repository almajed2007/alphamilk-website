"use client"

import { useState, useEffect } from "react"
import { validateSolanaAddress } from "@/utils/address-validation"

export const useAddressValidation = (address: string) => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!address) {
      setIsValid(false)
      setError("Address is required")
      return
    }

    const valid = validateSolanaAddress(address)
    setIsValid(valid)
    setError(valid ? null : "Invalid Solana address format")
  }, [address])

  return { isValid, error }
}

export const useTokenAddressValidation = (tokenAddress: string) => {
  const { isValid, error } = useAddressValidation(tokenAddress)

  return {
    isValidTokenAddress: isValid,
    tokenAddressError: error,
    validateAndExecute: (callback: () => void) => {
      if (isValid) {
        callback()
      } else {
        alert(`Invalid token address: ${error}`)
      }
    },
  }
}
