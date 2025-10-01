"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { LogOut } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

interface MainDashboardProps {
  onNavigate: (screen: string) => void
}

export default function MainDashboard({ onNavigate }: MainDashboardProps) {
  const { t } = useLanguage()

  const businessCards = [
    {
      title: t("card.sales"),
      icon: "/your_sales_icon.png",
      onClick: () => onNavigate("sales"),
    },
    {
      title: t("card.loans"),
      icon: "/financial_aid_icon.png",
      onClick: () => onNavigate("loans-incentives"),
    },
    {
      title: t("card.government"),
      icon: "/govt_services_icon.png",
      onClick: () => onNavigate("government-services"),
    },
  ]

  const informationCards = [
    {
      title: t("card.price"),
      icon: "/price_alert_icon.png",
      onClick: () => onNavigate("price-alerts"),
    },
    {
      title: t("card.community"),
      icon: "/com_icon.png",
      onClick: () => onNavigate("community-updates"),
    },
    {
      title: t("card.training"),
      icon: "/train_icon.png",
      onClick: () => onNavigate("training"),
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={t("dashboard.home")} />

      <div className="flex-1 flex flex-col justify-center items-center px-16 py-12">
        <div className="text-center space-y-8 max-w-6xl w-full">
          {/* Welcome Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary-dark">{t("dashboard.welcome")}</h1>
            <p className="text-xl text-primary-dark/80 italic">{t("dashboard.location")}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary-dark text-left">{t("dashboard.business")}</h2>
            <div className="grid grid-cols-3 gap-6">
              {businessCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <Button
                      onClick={card.onClick}
                      className="bg-transparent hover:bg-transparent p-0 h-auto w-auto group transition-all duration-300 hover:scale-110"
                    >
                      <Image 
                        src={card.icon} 
                        alt={card.title} 
                        width={120} 
                        height={120} 
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 object-contain" 
                      />
                    </Button>
                  </div>
                  <Button
                    onClick={card.onClick}
                    className="bg-primary-dark hover:bg-primary-dark/90 text-white p-4 rounded-3xl h-16 w-full flex items-center justify-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <span className="text-base font-bold text-balance leading-tight">{card.title}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-semibold text-primary-dark text-left">{t("dashboard.information")}</h2>
            <div className="grid grid-cols-3 gap-6">
              {informationCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <Button
                      onClick={card.onClick}
                      className="bg-transparent hover:bg-transparent p-0 h-auto w-auto group transition-all duration-300 hover:scale-110"
                    >
                      <Image 
                        src={card.icon} 
                        alt={card.title} 
                        width={120} 
                        height={120} 
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 object-contain" 
                      />
                    </Button>
                  </div>
                  <Button
                    onClick={card.onClick}
                    className="bg-accent-cyan hover:bg-accent-cyan/90 text-white p-4 rounded-3xl h-16 w-full flex items-center justify-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <span className="text-base font-bold text-balance leading-tight">{card.title}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex justify-end pt-8">
            <Button
              onClick={() => onNavigate("welcome")}
              variant="ghost"
              className="text-primary-dark hover:text-primary-dark/80 text-xl flex items-center gap-2"
            >
              <span>{t("dashboard.logout")}</span>
              <LogOut className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
