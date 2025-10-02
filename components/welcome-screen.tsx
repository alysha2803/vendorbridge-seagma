"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { useLanguage } from "@/lib/language-context"

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/market-vendors-fruits.png"
          alt="Market background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header title="" />

        <div className="flex-1 flex items-center justify-end px-16">
          <div className="text-right space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-blue-900 text-balance drop-shadow-lg">{t("welcome.title")}</h1>
              <p className="text-3xl text-white italic text-balance drop-shadow-lg">{t("welcome.subtitle")}</p>
            </div>

            <div>
              <Button
                onClick={onStart}
                className="bg-primary-dark hover:bg-primary-dark/90 text-white px-12 py-6 text-xl rounded-full shadow-xl"
              >
                {t("welcome.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
