"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { useLanguage } from "@/lib/language-context"

interface LanguageSelectionProps {
  onLanguageSelect: () => void
}

export default function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  const { setLanguage } = useLanguage()

  const handleLanguageSelect = (lang: "english" | "malay") => {
    setLanguage(lang)
    onLanguageSelect()
  }

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col justify-center items-center px-16">
        <div className="text-center space-y-12 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-primary-dark">Sila pilih bahasa anda.</h1>
            <p className="text-3xl text-primary-dark/80 italic">Please select your language.</p>
          </div>

          <div className="flex gap-8 justify-center">
            <Button
              onClick={() => handleLanguageSelect("malay")}
              className="bg-primary-dark hover:bg-primary-dark/90 text-white px-16 py-8 text-2xl rounded-full min-w-[300px]"
            >
              Bahasa Malaysia
            </Button>

            <Button
              onClick={() => handleLanguageSelect("english")}
              className="bg-primary-dark hover:bg-primary-dark/90 text-white px-16 py-8 text-2xl rounded-full min-w-[300px]"
            >
              English
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
