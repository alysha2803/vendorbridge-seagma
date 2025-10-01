"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import {
  Users,
  HandCoins,
  Tag,
  Megaphone,
  GraduationCap,
  TrendingUp,
  Bell,
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ServicesModuleProps {
  moduleType: string
  onBack: () => void
}

export default function ServicesModule({ moduleType, onBack }: ServicesModuleProps) {
  const { t } = useLanguage()

  const getModuleTitle = () => {
    switch (moduleType) {
      case "government-services":
        return t("services.government.title")
      case "loans-incentives":
        return t("services.loans.title")
      case "price-alerts":
        return t("services.price.title")
      case "community-updates":
        return t("services.community.title")
      case "training":
        return t("services.training.title")
      default:
        return "Services"
    }
  }

  const getModuleIcon = () => {
    switch (moduleType) {
      case "government-services":
        return Users
      case "loans-incentives":
        return HandCoins
      case "price-alerts":
        return Tag
      case "community-updates":
        return Megaphone
      case "training":
        return GraduationCap
      default:
        return Users
    }
  }

  const renderGovernmentServices = () => (
    <div className="space-y-6">
      {/* Financial Readiness Progress */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Financial Readiness Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Loan Eligibility</span>
              <Badge className="bg-yellow-100 text-yellow-800">Silver Level - 68%</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-accent-cyan h-3 rounded-full" style={{ width: "68%" }}></div>
            </div>
            <div className="text-sm text-gray-600">
              Log consistent sales for 2 more months to reach Gold level and unlock premium loan options.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Recommended Microloans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">SME Micro Financing</h4>
                <Badge className="bg-green-100 text-green-800">Eligible</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-3">Up to RM 50,000 • 3.5% interest</div>
              <Button size="sm" className="bg-primary-dark hover:bg-primary-dark/90 text-white">
                Apply Now
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">Hawker Development Fund</h4>
                <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-3">Up to RM 25,000 • 2.8% interest</div>
              <Button size="sm" variant="outline" className="border-primary-dark text-primary-dark bg-transparent">
                View Requirements
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Government Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-primary-dark hover:bg-primary-dark/90 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              LHDN Tax Assistance
            </Button>
            <Button className="w-full justify-start bg-primary-dark hover:bg-primary-dark/90 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Business License Renewal
            </Button>
            <Button className="w-full justify-start bg-primary-dark hover:bg-primary-dark/90 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Subsidy Applications
            </Button>
            <Button className="w-full justify-start bg-primary-dark hover:bg-primary-dark/90 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Health Department Compliance
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderLoansIncentives = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              {t("loans.level")}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-accent-cyan mb-2">Silver</div>
            <div className="text-sm text-gray-600">68% Financial Readiness</div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent-cyan h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>{t("loans.available")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-dark mb-2">RM 75,000</div>
            <div className="text-sm text-gray-600">Maximum loan amount</div>
            <div className="text-sm text-green-600 mt-2">3 active loan options</div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Smart Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">💡 {t("government.tip1")}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: t("loans.tekun"),
                amount: "RM 50,000",
                rate: "3.5%",
                status: "eligible",
                url: "https://example.com/loan/tekun-micro",
              },
              {
                name: t("loans.agrobank"),
                amount: "RM 25,000",
                rate: "2.8%",
                status: "pending",
                url: "https://example.com/loan/agrobank",
              },
              {
                name: t("loans.bank"),
                amount: "RM 30,000",
                rate: "4.2%",
                status: "eligible",
                url: "https://example.com/loan/bank-rakyat",
              },
            ].map((loan, index) => (
              <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{loan.name}</h4>
                  <div className="text-sm text-gray-600">
                    {loan.amount} • {loan.rate} interest
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      loan.status === "eligible" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {loan.status === "eligible" ? "Eligible" : "Pending"}
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-primary-dark hover:bg-primary-dark/90 text-white"
                    onClick={() => window.open(loan.url, "_blank")}
                  >
                    {t("loans.apply")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderPriceAlerts = () => (
    <div className="h-[calc(100vh-12rem)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Active Price Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { item: "Rice (10kg)", current: "RM 28.50", change: "+5%", trend: "up" },
                { item: "Cooking Oil (5L)", current: "RM 22.00", change: "-2%", trend: "down" },
                { item: "Chicken (1kg)", current: "RM 9.80", change: "+8%", trend: "up" },
                { item: "Onions (1kg)", current: "RM 4.50", change: "+12%", trend: "up" },
              ].map((alert, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${alert.trend === "up" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{alert.item}</h4>
                      <div className="text-lg font-bold">{alert.current}</div>
                    </div>
                    <div className={`text-right ${alert.trend === "up" ? "text-red-600" : "text-green-600"}`}>
                      <div className="font-semibold">{alert.change}</div>
                      <div className="text-sm">vs last week</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Pricing Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="font-semibold text-yellow-800">⚠️ Consider Price Adjustment</div>
                <div className="text-sm text-yellow-700 mt-1">
                  Rice prices increased 5%. Consider adjusting your nasi lemak price by RM 0.50 to maintain margins.
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-green-800">✅ Good Opportunity</div>
                <div className="text-sm text-green-700 mt-1">
                  Cooking oil prices dropped 2%. You can maintain current prices and improve profit margins.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCommunityUpdates = () => (
    <div className="h-[calc(100vh-12rem)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5" />
              Latest Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Market Renovation Notice",
                  date: "2 days ago",
                  content:
                    "Scheduled maintenance for electrical systems on March 15-16. Alternative power arrangements will be provided.",
                  priority: "high",
                },
                {
                  title: "New Digital Payment Initiative",
                  date: "1 week ago",
                  content:
                    "Government launching new QR payment incentives for hawkers. Register by month-end for RM 500 bonus.",
                  priority: "medium",
                },
                {
                  title: "Vendor Meeting - March 20",
                  date: "1 week ago",
                  content: "Monthly vendor association meeting to discuss market improvements and upcoming events.",
                  priority: "low",
                },
              ].map((update, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${
                    update.priority === "high"
                      ? "border-red-200 bg-red-50"
                      : update.priority === "medium"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{update.title}</h4>
                    <Badge
                      className={
                        update.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : update.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {update.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{update.date}</div>
                  <div className="text-sm">{update.content}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Market Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary-dark" />
                  <h4 className="font-semibold">Ramadan Night Market</h4>
                </div>
                <div className="text-sm text-gray-600">March 25 - April 20 • Extended hours: 6 PM - 2 AM</div>
                <Button size="sm" className="mt-2 bg-primary-dark hover:bg-primary-dark/90 text-white">
                  Register Interest
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderTraining = () => (
    <div className="h-[calc(100vh-12rem)] overflow-hidden">
      <Card className="bg-white h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            {t("training.upcoming")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                title: t("training.digital"),
                date: t("training.digital.date"),
                description: t("training.digital.desc"),
                spots: "8 spots left",
              },
              {
                title: t("training.business"),
                date: t("training.business.date"),
                description: t("training.business.desc"),
                spots: "12 spots left",
              },
              {
                title: t("training.food"),
                date: t("training.food.date"),
                description: t("training.food.desc"),
                spots: "5 spots left",
              },
            ].map((workshop, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{workshop.title}</h4>
                  <Badge className="bg-blue-100 text-blue-800">{workshop.spots}</Badge>
                </div>
                <div className="text-sm text-gray-600 mb-2">{workshop.date}</div>
                <div className="text-sm text-gray-700 mb-3">{workshop.description}</div>
                <Button size="sm" className="bg-primary-dark hover:bg-primary-dark/90 text-white">
                  {t("training.register")}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (moduleType) {
      case "government-services":
        return renderGovernmentServices()
      case "loans-incentives":
        return renderLoansIncentives()
      case "price-alerts":
        return renderPriceAlerts()
      case "community-updates":
        return renderCommunityUpdates()
      case "training":
        return renderTraining()
      default:
        return <div>Module not found</div>
    }
  }

  const IconComponent = getModuleIcon()

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={getModuleTitle()} showBackButton onBack={onBack} />

      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Module Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
