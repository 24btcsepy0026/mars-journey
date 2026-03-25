import { useEffect, useState } from "react"
import "./LoadingScreen.css"

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 3
      })
    }, 25)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="rocket-loader-emoji">🚀</div>
        <h1 className="loading-title">Journey to Mars</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">{progress}%</p>
      </div>
    </div>
  )
}