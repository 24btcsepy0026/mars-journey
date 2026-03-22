import { useEffect, useState } from "react"
import "./ScrollProgress.css"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  )
}