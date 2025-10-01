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
  DollarSign,
  Clock,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

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
    <div className="h-[calc(100vh-12rem)] overflow-hidden flex flex-col space-y-4">
      {/* Application Profile Section */}
      <Card className="bg-white flex-shrink-0">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5" />
            {t("profile.application_profile")}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <Image src="/ssm_logo.webp" alt="SSM" width={24} height={24} className="flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.business_registration")}</div>
                <div className="font-semibold text-green-600 text-sm">✓ Registered</div>
                <div className="text-xs text-gray-500">SSM: 123456789</div>
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.monthly_revenue")}</div>
                <div className="font-semibold text-primary-dark text-sm">RM 8,500</div>
                <div className="text-xs text-gray-500">Last 3 months</div>
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <Image src="/ctos_logo.png" alt="CTOS" width={24} height={24} className="flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.credit_score")}</div>
                <div className="font-semibold text-accent-cyan text-sm">Good (720)</div>
                <div className="text-xs text-gray-500">CTOS verified</div>
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.business_age")}</div>
                <div className="font-semibold text-primary-dark text-sm">2.5 years</div>
                <div className="text-xs text-gray-500">Since Jan 2022</div>
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <Image src="/lhdn_logo.png" alt="LHDN" width={24} height={24} className="flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.tax_compliance")}</div>
                <div className="font-semibold text-green-600 text-sm">✓ Up to date</div>
                <div className="text-xs text-gray-500">LHDN registered</div>
              </div>
            </div>
            <div className="border rounded-lg p-3 flex items-center gap-2">
              <Image src="/maybank.jpg" alt="Maybank" width={24} height={24} className="flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-600">{t("profile.bank_account")}</div>
                <div className="font-semibold text-green-600 text-sm">✓ Active</div>
                <div className="text-xs text-gray-500">Maybank 1234567890</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Eligible Subsidies and Incentives */}
      <Card className="bg-white flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{t("profile.eligible_subsidies")}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <div className="space-y-2 max-h-40">
            {[
              {
                name: "TEKUN Micro Financing",
                amount: "Up to RM 50,000",
                rate: "3.5% p.a.",
                description: "Special rate for market vendors",
                status: "eligible",
                url: "https://example.com/tekun-application",
              },
              {
                name: "Agrobank Hawker Fund",
                amount: "Up to RM 25,000",
                rate: "2.8% p.a.",
                description: "Low interest for food vendors",
                status: "eligible",
                url: "https://example.com/agrobank-application",
              },
              {
                name: "Government Subsidy Program",
                amount: "RM 2,000 monthly",
                rate: "0% interest",
                description: "6-month support program",
                status: "eligible",
                url: "https://example.com/subsidy-application",
              },
              {
                name: "Bank Rakyat SME Loan",
                amount: "Up to RM 30,000",
                rate: "4.2% p.a.",
                description: "Flexible repayment terms",
                status: "pending",
                url: "https://example.com/bank-rakyat-application",
              },
            ].map((aid, index) => (
              <div key={index} className="border rounded-lg p-3 flex items-center gap-3">
                <Image src="/placeholder.jpg" alt="Logo" width={40} height={40} className="flex-shrink-0 rounded" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base">{aid.name}</h4>
                  <div className="text-sm text-gray-600 mb-1">{aid.description}</div>
                  <div className="text-sm text-primary-dark font-medium">
                    {aid.amount} • {aid.rate}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge
                    className={
                      aid.status === "eligible" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {aid.status === "eligible" ? "Eligible" : "Under Review"}
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-primary-dark hover:bg-primary-dark/90 text-white"
                    onClick={() => window.open(aid.url, "_blank")}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Loan Applications - Advertisement Style */}
      <Card className="bg-white flex-shrink-0">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{t("profile.featured_loans")}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "TEKUN Micro Loan",
                amount: "RM 50,000",
                rate: "3.5%",
                image: "/placeholder.jpg",
                description: "Quick approval for small businesses",
                features: ["No collateral required", "Flexible repayment", "Government backed"],
                url: "https://example.com/tekun-featured",
              },
              {
                name: "Agrobank Business Loan",
                amount: "RM 75,000",
                rate: "4.1%",
                image: "/placeholder.jpg",
                description: "Comprehensive business financing",
                features: ["Higher loan amounts", "Business advisory", "Insurance included"],
                url: "https://example.com/agrobank-featured",
              },
              {
                name: "Bank Rakyat SME Plus",
                amount: "RM 100,000",
                rate: "4.5%",
                image: "/placeholder.jpg",
                description: "Premium business loan package",
                features: ["Priority processing", "Dedicated relationship manager", "Additional benefits"],
                url: "https://example.com/bank-rakyat-featured",
              },
            ].map((loan, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-20 bg-gradient-to-r from-primary-dark to-accent-cyan flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">{loan.amount}</div>
                    <div className="text-xs opacity-90">{loan.rate} interest</div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm mb-1">{loan.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{loan.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1 mb-2">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white text-xs"
                    onClick={() => window.open(loan.url, "_blank")}
                  >
                    Learn More
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
