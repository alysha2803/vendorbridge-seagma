"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { TrendingUp, Users, HandCoins, Tag, Megaphone, GraduationCap, LogOut } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface MainDashboardProps {
  onNavigate: (screen: string) => void
}

export default function MainDashboard({ onNavigate }: MainDashboardProps) {
  const { t } = useLanguage()

  const businessCards = [
    {
      title: t("card.sales"),
      icon: TrendingUp,
      onClick: () => onNavigate("sales"),
    },
    {
      title: t("card.government"),
      icon: Users,
      onClick: () => onNavigate("government-services"),
    },
    {
      title: t("card.loans"),
      icon: HandCoins,
      onClick: () => onNavigate("loans-incentives"),
    },
  ]

  const informationCards = [
    {
      title: t("card.price"),
      icon: Tag,
      onClick: () => onNavigate("price-alerts"),
    },
    {
      title: t("card.community"),
      icon: Megaphone,
      onClick: () => onNavigate("community-updates"),
    },
    {
      title: t("card.training"),
      icon: GraduationCap,
      onClick: () => onNavigate("training"),
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={t("dashboard.home")} />

      <div className="flex-1 flex flex-col justify-center items-center px-16 py-12">
        <div className="text-center space-y-12 max-w-6xl w-full">
          {/* Welcome Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary-dark">{t("dashboard.welcome")}</h1>
            <p className="text-xl text-primary-dark/80 italic">{t("dashboard.location")}</p>
          </div>

          <div className="space-y-10">
            <h2 className="text-2xl font-semibold text-primary-dark text-left">{t("dashboard.business")}</h2>
            <div className="grid grid-cols-3 gap-8">
              {businessCards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <Button
                    key={index}
                    onClick={card.onClick}
                    className="bg-primary-dark hover:bg-primary-dark/90 text-white p-10 rounded-3xl h-40 flex items-center justify-between text-left group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <span className="text-2xl font-bold text-balance leading-tight">{card.title}</span>
                    <IconComponent className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="space-y-10 pt-8">
            <h2 className="text-2xl font-semibold text-primary-dark text-left">{t("dashboard.information")}</h2>
            <div className="grid grid-cols-3 gap-8">
              {informationCards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <Button
                    key={index}
                    onClick={card.onClick}
                    className="bg-accent-cyan hover:bg-accent-cyan/90 text-white p-10 rounded-3xl h-40 flex items-center justify-between text-left group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <span className="text-2xl font-bold text-balance leading-tight">{card.title}</span>
                    <IconComponent className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </Button>
                )
              })}
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
