"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  title?: string
  showBackButton?: boolean
  onBack?: () => void
}

export default function Header({ title, showBackButton = false, onBack }: HeaderProps) {
  return (
    <header className="bg-primary-dark text-white px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {showBackButton && onBack && (
          <Button onClick={onBack} variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        )}
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
      </div>

      <div className="flex items-center">
        <Image src="/vendor-bridge-logo-new-removebg-preview.png" alt="VendorBridge Logo" width={300} height={75} className="h-16 w-auto" />
      </div>
    </header>
  )
}
