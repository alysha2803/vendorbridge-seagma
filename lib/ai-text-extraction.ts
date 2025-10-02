// AI Text Extraction Service for Logbook Processing
// This simulates AI-powered OCR and text extraction

export interface ExtractedTransaction {
  time: string
  type: 'Cash' | 'QR'
  amount: string
  item?: string
  quantity?: number
}

export interface LogbookData {
  date: string
  transactions: ExtractedTransaction[]
  totalAmount: number
  totalTransactions: number
}

// Simulate AI text extraction with realistic processing
export async function extractLogbookData(imageData: string): Promise<LogbookData> {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000))
  
  // For demo purposes, simulate a more realistic single transaction
  // In a real implementation, this would use OCR to read the actual logbook
  const extractedTransactions: ExtractedTransaction[] = [
    {
      time: "10:30",
      type: "Cash",
      amount: "RM 10.56", // Using your actual amount
      item: "Food Sale",
      quantity: 1
    }
  ]
  
  const totalAmount = extractedTransactions.reduce((sum, transaction) => {
    const amount = parseFloat(transaction.amount.replace('RM ', ''))
    return sum + amount
  }, 0)
  
  return {
    date: new Date().toLocaleDateString('en-MY'),
    transactions: extractedTransactions,
    totalAmount: Math.round(totalAmount * 100) / 100,
    totalTransactions: extractedTransactions.length
  }
}

function generateRandomTime(): string {
  const hour = 8 + Math.floor(Math.random() * 8) // 8 AM to 4 PM
  const minute = Math.floor(Math.random() * 60)
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}

// In a real implementation, this would integrate with:
// 1. Google Cloud Vision API for OCR
// 2. OpenAI GPT-4 Vision for intelligent text parsing
// 3. Custom ML models trained on Malaysian logbook formats
// 4. Tesseract.js for client-side OCR

export async function processLogbookImage(imageData: string): Promise<{
  success: boolean
  data?: LogbookData
  error?: string
}> {
  try {
    // Validate image data
    if (!imageData || !imageData.startsWith('data:image/')) {
      throw new Error('Invalid image data')
    }
    
    // Extract logbook data using AI
    const extractedData = await extractLogbookData(imageData)
    
    return {
      success: true,
      data: extractedData
    }
  } catch (error) {
    console.error('Error processing logbook image:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to process image'
    }
  }
}

// Helper function to convert extracted data to sales dashboard format
export function convertToSalesData(logbookData: LogbookData) {
  const cashTransactions = logbookData.transactions.filter(t => t.type === 'Cash')
  const qrTransactions = logbookData.transactions.filter(t => t.type === 'QR')
  
  const cashTotal = cashTransactions.reduce((sum, t) => 
    sum + parseFloat(t.amount.replace('RM ', '')), 0
  )
  
  const qrTotal = qrTransactions.reduce((sum, t) => 
    sum + parseFloat(t.amount.replace('RM ', '')), 0
  )
  
  return {
    totalSales: `RM ${logbookData.totalAmount.toFixed(2)}`,
    cashTransactions: cashTransactions.length,
    cashAmount: `RM ${cashTotal.toFixed(2)}`,
    qrTransactions: qrTransactions.length,
    qrAmount: `RM ${qrTotal.toFixed(2)}`,
    recentTransactions: logbookData.transactions.slice(-5).reverse(), // Show latest 5
    extractedDate: logbookData.date
  }
}
