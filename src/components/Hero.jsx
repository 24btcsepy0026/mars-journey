import { useEffect, useRef, useState } from "react"
import earthImg from "../assets/earth.png"
import "./Hero.css"

export default function Hero() {
  const [countdownActive, setCountdownActive] = useState(true)
  const [countdownValue, setCountdownValue] = useState(3)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const earthRef = useRef(null)

  useEffect(() => {
    // Simple entrance animation without GSAP for performance
    const animate = async () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1'
        titleRef.current.style.transform = 'translateY(0)'
      }
      if (earthRef.current) {
        earthRef.current.style.opacity = '1'
        earthRef.current.style.transform = 'scale(1)'
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1'
        subtitleRef.current.style.transform = 'translateY(0)'
      }
    }
    
    setTimeout(animate, 100)
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdownValue(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setCountdownActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  // Reduced stars for performance
  const stars = Array.from({ length: 40 })

  return (
    <section className="hero-section">
      {/* Stars Background */}
      <div className="stars-container">
        {stars.map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <h1 ref={titleRef} className="hero-title" style={{ opacity: 0, transform: 'translateY(50px)', transition: 'all 0.8s ease' }}>
        Journey to <span className="mars-text">Mars</span>
      </h1>

      <div className="planet-container">
        <img 
          ref={earthRef}
          src={earthImg}
          alt="Earth"
          className="earth-image"
          style={{ opacity: 0, transform: 'scale(0)', transition: 'all 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)' }}
        />
      </div>

      <p ref={subtitleRef} className="hero-subtitle" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}>
        Humanity's Greatest Adventure
      </p>

      <div className="mission-stats">
        <div className="stat-card">
          <span className="stat-number">225M</span>
          <span className="stat-name">KM Distance</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">7</span>
          <span className="stat-name">Months Travel</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">-60°C</span>
          <span className="stat-name">Surface Temp</span>
        </div>
      </div>

      <div className="countdown">
        <span className="countdown-label">Launch Sequence</span>
        <div className="countdown-numbers">
          {countdownActive ? (
            <span className="countdown-number">{countdownValue}</span>
          ) : (
            <span className="countdown-number blastoff">LIFT OFF!</span>
          )}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to Begin Journey</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}