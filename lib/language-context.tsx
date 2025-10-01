"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "english" | "malay"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  english: {
    // Welcome Screen
    "welcome.title": "Welcome to VendorBridge Kiosk, your market management assistant.",
    "welcome.subtitle": "Selamat Datang ke Kios VendorBridge, teman pengurusan pasar anda.",
    "welcome.button": "Touch the screen to start",

    // Language Selection
    "language.title": "Select Language",
    "language.subtitle": "Please select your language.",
    "language.malay": "Bahasa Malaysia",
    "language.english": "English",

    // MyKad Prompt
    "mykad.title": "Please insert your MyKad identification card into the card reader.",
    "mykad.subtitle": "Make sure the card is properly inserted with the chip facing up.",
    "mykad.login": "Login",

    // Fingerprint Login
    "fingerprint.title": "Please place your left or right index finger on the fingerprint scanner.",
    "fingerprint.subtitle": "Please make sure your finger is clean and dry before scanning.",
    "fingerprint.login": "Login",

    // Main Dashboard
    "dashboard.welcome": "Welcome, Limah",
    "dashboard.location": "Pasar Besar Taman Tun Dr Ismail",
    "dashboard.business": "Business Management",
    "dashboard.information": "Information & Resources",
    "dashboard.logout": "Logout",
    "dashboard.home": "Home",

    // Dashboard Cards
    "card.sales": "Your Sales",
    "card.government": "Government Services",
    "card.loans": "Loans & Incentives",
    "card.price": "Price Alerts",
    "card.community": "Community Updates",
    "card.training": "Training",

    // Sales Module
    "sales.title": "Your Sales",
    "sales.today": "Total Sales Today",
    "sales.cash": "Cash Transactions",
    "sales.qr": "QR Transactions",
    "sales.trend": "Sales Trend (Last 7 Days)",
    "sales.logging": "Transaction Logging",
    "sales.upload": "Upload Logbook Photo",
    "sales.qr.check": "Check QR Payments",
    "sales.reports": "Reports & History",
    "sales.download": "Download Reports",
    "sales.whatsapp": "Send to WhatsApp",
    "sales.email": "Send to Email",
    "sales.recent": "Recent Transactions",
    "sales.date": "Date",
    "sales.type": "Type",
    "sales.amount": "Amount",
    "sales.cash.type": "Cash",
    "sales.qr.type": "QR",

    // Services Module
    "services.government.title": "Government Services",
    "services.loans.title": "Loans & Incentives",
    "services.price.title": "Price Alerts",
    "services.community.title": "Community Updates",
    "services.training.title": "Training",

    // Government Services
    "government.progress": "Financial Readiness Progress",
    "government.level": "Current Level",
    "government.bronze": "Bronze",
    "government.services": "Available Government Services",
    "government.tax": "LHDN Tax Assistance",
    "government.subsidy": "Apply for Subsidies",
    "government.license": "Business Licensing Info",
    "government.tips": "Smart Tips",
    "government.tip1": "Log consistent sales for 3 months to unlock loan eligibility",

    // Loans & Incentives
    "loans.progress": "Loan Eligibility Progress",
    "loans.level": "Trust Level",
    "loans.available": "Available Microloans",
    "loans.tekun": "TEKUN Microloan",
    "loans.tekun.desc": "Up to RM50,000 for small businesses",
    "loans.agrobank": "Agrobank Financing",
    "loans.agrobank.desc": "Special rates for market vendors",
    "loans.bank": "Bank Rakyat SME",
    "loans.bank.desc": "Flexible repayment terms",
    "loans.apply": "Check Eligibility",

    // Price Alerts
    "price.recent": "Recent Price Changes",
    "price.rice": "Rice (10kg)",
    "price.oil": "Cooking Oil (5L)",
    "price.chicken": "Chicken (per kg)",
    "price.fish": "Fish (per kg)",
    "price.up": "up from last week",
    "price.down": "down from last week",
    "price.tips": "Pricing Tips",
    "price.tip1": "Consider adjusting your menu prices based on ingredient cost changes",

    // Community Updates
    "community.latest": "Latest Announcements",
    "community.event1": "Market Vendor Meeting",
    "community.event1.desc": "Monthly meeting to discuss market improvements - This Saturday 9 AM",
    "community.event2": "New Parking Regulations",
    "community.event2.desc": "Updated parking rules effective next month. Check notice board for details.",
    "community.event3": "Festival Preparation",
    "community.event3.desc": "Upcoming Hari Raya market festival - Register your stall by next week",

    // Training
    "training.upcoming": "Upcoming Workshops",
    "training.digital": "Digital Payment Workshop",
    "training.digital.desc": "Learn to use QR payments and digital wallets",
    "training.digital.date": "Date: 15 March 2024, 2:00 PM",
    "training.business": "Business Management Training",
    "training.business.desc": "Improve your business skills and financial planning",
    "training.business.date": "Date: 22 March 2024, 10:00 AM",
    "training.food": "Food Safety Certification",
    "training.food.desc": "Get certified in food handling and safety practices",
    "training.food.date": "Date: 30 March 2024, 9:00 AM",
    "training.register": "Register Now",
  },
  malay: {
    // Welcome Screen
    "welcome.title": "Selamat Datang ke Kios VendorBridge, teman pengurusan pasar anda.",
    "welcome.subtitle": "Welcome to VendorBridge Kiosk, your market management assistant.",
    "welcome.button": "Klik skrin untuk bermula",

    // Language Selection
    "language.title": "Pilihan Bahasa",
    "language.subtitle": "Sila pilih bahasa anda.",
    "language.malay": "Bahasa Malaysia",
    "language.english": "English",

    // MyKad Prompt
    "mykad.title": "Sila masukkan kad pengenalan MyKad anda ke dalam pembaca kad.",
    "mykad.subtitle": "Pastikan kad dimasukkan dengan betul dengan cip menghadap ke atas.",
    "mykad.login": "Log Masuk",

    // Fingerprint Login
    "fingerprint.title": "Sila letakkan jari telunjuk kiri atau kanan anda pada pengimbas cap jari.",
    "fingerprint.subtitle": "Sila pastikan jari anda bersih dan kering sebelum mengimbas.",
    "fingerprint.login": "Log Masuk",

    // Main Dashboard
    "dashboard.welcome": "Selamat Datang, Limah",
    "dashboard.location": "Pasar Besar Taman Tun Dr Ismail",
    "dashboard.business": "Pengurusan Perniagaan",
    "dashboard.information": "Maklumat & Sumber",
    "dashboard.logout": "Log Keluar",
    "dashboard.home": "Laman Utama",

    // Dashboard Cards
    "card.sales": "Jualan Anda",
    "card.government": "Perkhidmatan Kerajaan",
    "card.loans": "Pinjaman & Insentif",
    "card.price": "Amaran Harga",
    "card.community": "Kemas Kini Komuniti",
    "card.training": "Latihan",

    // Sales Module
    "sales.title": "Jualan Anda",
    "sales.today": "Jumlah Jualan Hari Ini",
    "sales.cash": "Transaksi Tunai",
    "sales.qr": "Transaksi QR",
    "sales.trend": "Trend Jualan (7 Hari Lepas)",
    "sales.logging": "Pencatatan Transaksi",
    "sales.upload": "Muat Naik Foto Buku Log",
    "sales.qr.check": "Semak Pembayaran QR",
    "sales.reports": "Laporan & Sejarah",
    "sales.download": "Muat Turun Laporan",
    "sales.whatsapp": "Hantar ke WhatsApp",
    "sales.email": "Hantar ke E-mel",
    "sales.recent": "Transaksi Terkini",
    "sales.date": "Tarikh",
    "sales.type": "Jenis",
    "sales.amount": "Jumlah",
    "sales.cash.type": "Tunai",
    "sales.qr.type": "QR",

    // Services Module
    "services.government.title": "Perkhidmatan Kerajaan",
    "services.loans.title": "Pinjaman & Insentif",
    "services.price.title": "Amaran Harga",
    "services.community.title": "Kemas Kini Komuniti",
    "services.training.title": "Latihan",

    // Government Services
    "government.progress": "Kemajuan Kesediaan Kewangan",
    "government.level": "Tahap Semasa",
    "government.bronze": "Gangsa",
    "government.services": "Perkhidmatan Kerajaan Tersedia",
    "government.tax": "Bantuan Cukai LHDN",
    "government.subsidy": "Mohon Subsidi",
    "government.license": "Maklumat Lesen Perniagaan",
    "government.tips": "Petua Bijak",
    "government.tip1": "Catat jualan konsisten selama 3 bulan untuk membuka kelayakan pinjaman",

    // Loans & Incentives
    "loans.progress": "Kemajuan Kelayakan Pinjaman",
    "loans.level": "Tahap Kepercayaan",
    "loans.available": "Pinjaman Mikro Tersedia",
    "loans.tekun": "Pinjaman Mikro TEKUN",
    "loans.tekun.desc": "Sehingga RM50,000 untuk perniagaan kecil",
    "loans.agrobank": "Pembiayaan Agrobank",
    "loans.agrobank.desc": "Kadar istimewa untuk penjaja pasar",
    "loans.bank": "Bank Rakyat PKS",
    "loans.bank.desc": "Terma bayaran balik yang fleksibel",
    "loans.apply": "Semak Kelayakan",

    // Price Alerts
    "price.recent": "Perubahan Harga Terkini",
    "price.rice": "Beras (10kg)",
    "price.oil": "Minyak Masak (5L)",
    "price.chicken": "Ayam (per kg)",
    "price.fish": "Ikan (per kg)",
    "price.up": "naik dari minggu lepas",
    "price.down": "turun dari minggu lepas",
    "price.tips": "Petua Harga",
    "price.tip1": "Pertimbangkan untuk menyesuaikan harga menu anda berdasarkan perubahan kos bahan",

    // Community Updates
    "community.latest": "Pengumuman Terkini",
    "community.event1": "Mesyuarat Penjaja Pasar",
    "community.event1.desc": "Mesyuarat bulanan untuk membincangkan penambahbaikan pasar - Sabtu ini 9 Pagi",
    "community.event2": "Peraturan Parkir Baharu",
    "community.event2.desc":
      "Peraturan parkir dikemas kini berkuat kuasa bulan depan. Semak papan notis untuk butiran.",
    "community.event3": "Persediaan Festival",
    "community.event3.desc": "Festival pasar Hari Raya akan datang - Daftar gerai anda sebelum minggu depan",

    // Training
    "training.upcoming": "Bengkel Akan Datang",
    "training.digital": "Bengkel Pembayaran Digital",
    "training.digital.desc": "Belajar menggunakan pembayaran QR dan dompet digital",
    "training.digital.date": "Tarikh: 15 Mac 2024, 2:00 Petang",
    "training.business": "Latihan Pengurusan Perniagaan",
    "training.business.desc": "Tingkatkan kemahiran perniagaan dan perancangan kewangan anda",
    "training.business.date": "Tarikh: 22 Mac 2024, 10:00 Pagi",
    "training.food": "Pensijilan Keselamatan Makanan",
    "training.food.desc": "Dapatkan sijil dalam pengendalian dan amalan keselamatan makanan",
    "training.food.date": "Tarikh: 30 Mac 2024, 9:00 Pagi",
    "training.register": "Daftar Sekarang",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("english")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
