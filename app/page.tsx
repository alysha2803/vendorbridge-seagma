"use client"

import { useState } from "react"
import { LanguageProvider } from "@/lib/language-context"
import WelcomeScreen from "@/components/welcome-screen"
import LanguageSelection from "@/components/language-selection"
import MyKadPrompt from "@/components/mykad-prompt"
import FingerprintLogin from "@/components/fingerprint-login"
import MainDashboard from "@/components/main-dashboard"
import SalesModule from "@/components/sales-module"
import ServicesModule from "@/components/services-module"

export default function KioskApp() {
  const [currentScreen, setCurrentScreen] = useState("welcome")

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen)
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-light">
        {currentScreen === "welcome" && <WelcomeScreen onStart={() => navigateToScreen("language")} />}
        {currentScreen === "language" && <LanguageSelection onLanguageSelect={() => navigateToScreen("mykad")} />}
        {currentScreen === "mykad" && <MyKadPrompt onCardInserted={() => navigateToScreen("fingerprint")} />}
        {currentScreen === "fingerprint" && <FingerprintLogin onLogin={() => navigateToScreen("dashboard")} />}
        {currentScreen === "dashboard" && <MainDashboard onNavigate={navigateToScreen} />}
        {currentScreen === "sales" && <SalesModule onBack={() => navigateToScreen("dashboard")} />}
        {(currentScreen === "government-services" ||
          currentScreen === "loans-incentives" ||
          currentScreen === "price-alerts" ||
          currentScreen === "community-updates" ||
          currentScreen === "training") && (
          <ServicesModule moduleType={currentScreen} onBack={() => navigateToScreen("dashboard")} />
        )}
      </div>
    </LanguageProvider>
  )
}
