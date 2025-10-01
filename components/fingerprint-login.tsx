"use client"

import { useState } from "react"
import Header from "@/components/header"
import { useLanguage } from "@/lib/language-context"

interface FingerprintLoginProps {
  onLogin: () => void
}

export default function FingerprintLogin({ onLogin }: FingerprintLoginProps) {
  const [isScanning, setIsScanning] = useState(false)
  const { t } = useLanguage()

  // Simulate fingerprint scanning
  const handleFingerprintScan = () => {
    setIsScanning(true)
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false)
      onLogin()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={t("fingerprint.login")} />

      <div className="flex-1 flex flex-col justify-center items-center px-16">
        <div className="text-center space-y-12 max-w-4xl">
          <h1 className="text-3xl font-bold text-primary-dark text-balance">{t("fingerprint.title")}</h1>

          {/* Fingerprint Scanner */}
          <div className="flex justify-center">
            <div
              className={`relative w-80 h-80 rounded-full border-4 border-primary-dark bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isScanning ? "animate-pulse border-accent-cyan" : "hover:border-accent-cyan"
              }`}
              onClick={handleFingerprintScan}
            >
              <div className="relative">
                <img
                  src="/fingerprint-scanner-device-with-finger-placement.jpg"
                  alt="Fingerprint scanner"
                  className="w-48 h-48 object-contain"
                />
                {isScanning && <div className="absolute inset-0 bg-accent-cyan/20 rounded-full animate-ping"></div>}
              </div>
            </div>
          </div>

          <p className="text-xl text-primary-dark/80 italic text-balance">{t("fingerprint.subtitle")}</p>

          {isScanning && <div className="text-accent-cyan text-xl font-semibold">Scanning fingerprint...</div>}
        </div>
      </div>
    </div>
  )
}
