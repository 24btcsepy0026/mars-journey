import { useState, useEffect } from "react"
import "./ThemeToggle.css"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDark(false)
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "light")
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className={`toggle-slider ${!isDark ? 'light' : ''}`}>
        <span className="toggle-icon">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  )
}