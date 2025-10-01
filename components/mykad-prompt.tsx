"use client"

import { useState } from "react"
import Header from "@/components/header"
import { CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

interface MyKadPromptProps {
  onCardInserted: () => void
}

export default function MyKadPrompt({ onCardInserted }: MyKadPromptProps) {
  const [isDetecting, setIsDetecting] = useState(false)
  const { t } = useLanguage()

  const handleCardDetection = () => {
    setIsDetecting(true)
    setTimeout(() => {
      setIsDetecting(false)
      onCardInserted()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={t("mykad.login")} />

      <div className="flex-1 flex flex-col justify-center items-center px-16">
        <div className="text-center space-y-12 max-w-4xl">
          <h1 className="text-3xl font-bold text-primary-dark text-balance">{t("mykad.title")}</h1>

          {/* MyKad Card Reader */}
          <div className="flex justify-center">
            <div
              className={`relative w-96 h-64 rounded-2xl border-4 border-primary-dark bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isDetecting ? "animate-pulse border-accent-cyan" : "hover:border-accent-cyan"
              }`}
              onClick={handleCardDetection}
            >
              <div className="text-center">
                <Image 
                  src="/mykad.png" 
                  alt="MyKad Card" 
                  width={200} 
                  height={120} 
                  className="mx-auto mb-4 object-contain"
                />
                <div className="text-lg font-semibold text-primary-dark">Insert MyKad Here</div>
                <div className="text-sm text-gray-600 mt-2">Card reader slot</div>
              </div>
              {isDetecting && <div className="absolute inset-0 bg-accent-cyan/20 rounded-2xl animate-ping"></div>}
            </div>
          </div>

          <p className="text-xl text-primary-dark/80 italic text-balance">{t("mykad.subtitle")}</p>

          {isDetecting && <div className="text-accent-cyan text-xl font-semibold">Detecting card...</div>}
        </div>
      </div>
    </div>
  )
}
