import { useState, useEffect } from 'react'

interface FAMAPriceData {
  commodity: string
  currentPrice: string
  previousPrice: string
  change: string
  trend: 'up' | 'down'
  unit: string
  lastUpdated: string
}

interface FAMAResponse {
  success: boolean
  data: FAMAPriceData[]
  lastUpdated: string
  source: string
  error?: string
}

export function useFAMAPrices() {
  const [prices, setPrices] = useState<FAMAPriceData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/fama-prices')
        const data: FAMAResponse = await response.json()
        
        if (data.success) {
          setPrices(data.data)
          setLastUpdated(data.lastUpdated)
        } else {
          setError(data.error || 'Failed to fetch price data')
          setPrices(data.data) // Use fallback data
          setLastUpdated(data.lastUpdated)
        }
      } catch (err) {
        setError('Network error while fetching prices')
        console.error('Error fetching FAMA prices:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return {
    prices,
    loading,
    error,
    lastUpdated
  }
}
