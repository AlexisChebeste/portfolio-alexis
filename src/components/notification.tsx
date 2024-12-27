import { useState, useEffect } from 'react'
interface NotificationProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export function Notification({ message, type, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md flex items-center justify-between transition-opacity duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      <span>{message}</span>
      <button
        onClick={handleClose}
        className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Cerrar notificación"
      >
        <p>X</p>
      </button>
    </div>
  )
}
