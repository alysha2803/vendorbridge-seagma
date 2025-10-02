"use client"

import React, { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, X, RotateCcw, Check, Upload } from "lucide-react"

interface CameraCaptureProps {
  onCapture: (imageData: string) => void
  onClose: () => void
  isProcessing?: boolean
}

export default function CameraCapture({ onCapture, onClose, isProcessing = false }: CameraCaptureProps) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [cameraError, setCameraError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const startCamera = useCallback(async () => {
    try {
      setCameraError(null)
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Use back camera on mobile
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      })
      
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      setCameraError('Unable to access camera. Please check permissions or use file upload instead.')
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
    }
  }, [stream])

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0)
        
        const imageData = canvas.toDataURL('image/jpeg', 0.8)
        setCapturedImage(imageData)
        stopCamera()
      }
    }
  }, [stopCamera])

  const retakePhoto = useCallback(() => {
    setCapturedImage(null)
    startCamera()
  }, [startCamera])

  const confirmCapture = useCallback(() => {
    if (capturedImage) {
      onCapture(capturedImage)
    }
  }, [capturedImage, onCapture])

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageData = e.target?.result as string
        setCapturedImage(imageData)
        stopCamera()
      }
      reader.readAsDataURL(file)
    }
  }, [stopCamera])

  // Auto-start camera when component mounts
  React.useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [])

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Capture Logbook Page
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {cameraError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{cameraError}</p>
            </div>
          )}

          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
            {!capturedImage ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                <canvas ref={canvasRef} className="hidden" />
                
                {/* Camera overlay guide */}
                <div className="absolute inset-4 border-2 border-white/50 rounded-lg flex items-center justify-center">
                  <div className="text-white/80 text-center">
                    <p className="text-sm font-medium">Position logbook page within frame</p>
                    <p className="text-xs mt-1">Ensure text is clear and readable</p>
                  </div>
                </div>
              </>
            ) : (
              <img
                src={capturedImage}
                alt="Captured logbook"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex gap-2 justify-center">
            {!capturedImage ? (
              <>
                <Button
                  onClick={capturePhoto}
                  disabled={!stream || cameraError !== null}
                  className="bg-primary-dark hover:bg-primary-dark/90 text-white"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Capture Photo
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark/5"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </>
            ) : (
              <>
                <Button
                  onClick={confirmCapture}
                  disabled={isProcessing}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {isProcessing ? 'Processing...' : 'Process Logbook'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={retakePhoto}
                  disabled={isProcessing}
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark/5"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake
                </Button>
              </>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">📸 Tips for Best Results:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Ensure good lighting on the logbook page</li>
              <li>• Keep the camera steady and focused</li>
              <li>• Make sure all text is clearly visible</li>
              <li>• Include date, items, and amounts in the frame</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
