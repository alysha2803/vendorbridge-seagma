"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { Camera, QrCode, TrendingUp, Eye, Mail, MessageCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useLanguage } from "@/lib/language-context"

interface SalesModuleProps {
  onBack: () => void
}

const salesData = [
  { day: "Mon", sales: 120 },
  { day: "Tue", sales: 150 },
  { day: "Wed", sales: 180 },
  { day: "Thu", sales: 140 },
  { day: "Fri", sales: 200 },
  { day: "Sat", sales: 250 },
  { day: "Sun", sales: 220 },
]

const recentTransactions = [
  { time: "14:30", type: "Cash", amount: "RM 25.50" },
  { time: "14:15", type: "QR", amount: "RM 18.00" },
  { time: "13:45", type: "Cash", amount: "RM 32.00" },
  { time: "13:20", type: "QR", amount: "RM 15.50" },
  { time: "12:55", type: "Cash", amount: "RM 28.00" },
]

export default function SalesModule({ onBack }: SalesModuleProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header title={t("sales.title")} showBackButton onBack={onBack} />

      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "dashboard"
                  ? "bg-primary-dark text-white"
                  : "bg-white text-primary-dark border border-primary-dark"
              }`}
            >
              {t("sales.title")}
            </Button>
            <Button
              onClick={() => setActiveTab("logging")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "logging"
                  ? "bg-primary-dark text-white"
                  : "bg-white text-primary-dark border border-primary-dark"
              }`}
            >
              {t("sales.logging")}
            </Button>
            <Button
              onClick={() => setActiveTab("reports")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "reports"
                  ? "bg-primary-dark text-white"
                  : "bg-white text-primary-dark border border-primary-dark"
              }`}
            >
              {t("sales.reports")}
            </Button>
          </div>

          {/* Sales Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Sales Summary */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-600">{t("sales.today")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary-dark">RM 1,247.50</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        +12% from yesterday
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-600">{t("sales.cash")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary-dark">23</div>
                      <div className="text-sm text-gray-500">RM 687.50</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-600">{t("sales.qr")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary-dark">18</div>
                      <div className="text-sm text-gray-500">RM 560.00</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sales Chart */}
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>{t("sales.trend")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#2F3C7E"
                            strokeWidth={3}
                            dot={{ fill: "#2F3C7E", strokeWidth: 2, r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Transactions */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>{t("sales.recent")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              transaction.type === "Cash" ? "bg-green-100" : "bg-blue-100"
                            }`}
                          >
                            {transaction.type === "Cash" ? "💵" : <QrCode className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="font-medium">{transaction.type}</div>
                            <div className="text-sm text-gray-500">{transaction.time}</div>
                          </div>
                        </div>
                        <div className="font-bold text-primary-dark">{transaction.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Transaction Logging Tab */}
          {activeTab === "logging" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">💵 {t("sales.logging")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full py-6 text-lg flex items-center gap-2 border-primary-dark text-primary-dark hover:bg-primary-dark/5 bg-transparent"
                  >
                    <Camera className="w-5 h-5" />
                    {t("sales.upload")}
                  </Button>

                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <strong>AI Digitization:</strong> Take a photo of your handwritten logbook and our AI will
                    automatically extract and log the transactions for you.
                  </div>
                </CardContent>
              </Card>

              {/* QR Logging */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="w-5 h-5" />
                    QR Logging
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <QrCode className="w-16 h-16 mx-auto text-primary-dark mb-4" />
                    <div className="text-lg font-medium text-primary-dark">Auto-Sync Active</div>
                    <div className="text-sm text-gray-600">Connected to DuitNow QR</div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full py-4 text-lg border-primary-dark text-primary-dark hover:bg-primary-dark/5 bg-transparent"
                  >
                    {t("sales.qr.check")}
                  </Button>

                  <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                    <strong>Automatic Logging:</strong> QR payments are automatically detected and logged. Use "Check &
                    Match" to verify recent transactions.
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>{t("sales.reports")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                      onClick={() => {
                        const phoneNumber = "601161858026"; // Your phone number in international format
                        const currentDate = new Date().toLocaleDateString('en-MY');
                        const reportMessage = `📊 *VendorBridge Sales Report*
📅 Date: ${currentDate}

💰 *Today's Sales Summary*
• Total Sales: RM 1,247.50
• Cash Transactions: 23 (RM 687.50)
• QR Payments: 18 (RM 560.00)
• Growth: +12% from yesterday

📈 *Weekly Performance*
• Monday: RM 120.00
• Tuesday: RM 150.00
• Wednesday: RM 180.00
• Thursday: RM 140.00
• Friday: RM 200.00
• Saturday: RM 250.00
• Sunday: RM 220.00

🏪 *Market: Pasar Besar Siti Khadijah*
Vendor ID: VB-2025-001

Generated by VendorBridge Kiosk System`;
                        
                        const encodedMessage = encodeURIComponent(reportMessage);
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("sales.whatsapp")}
                    </Button>
                    <Button className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {t("sales.email")}
                    </Button>
                    <div className="text-xs text-gray-600 text-center mt-2">
                      Choose report type: Daily, Weekly, or Monthly
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-primary-dark text-primary-dark hover:bg-primary-dark/5 flex items-center gap-2 bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                      Bank Officer View
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary-dark text-primary-dark hover:bg-primary-dark/5 flex items-center gap-2 bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                      Government View
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <div className="text-2xl font-bold text-primary-dark">156</div>
                      <div className="text-sm text-gray-600">Total transactions this month</div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-primary-dark text-primary-dark hover:bg-primary-dark/5 bg-transparent"
                    >
                      View Full History
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
