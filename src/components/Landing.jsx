import { useEffect, useRef, useState } from "react"
import marsImg from "../assets/mars.png"
import "./Landing.css"

export default function Landing() {
  const [landerVisible, setLanderVisible] = useState(true)
  const sectionRef = useRef(null)
  const landerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && landerRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / windowHeight)))
        
        if (scrollProgress > 0.7) {
          setLanderVisible(false)
        }
        
        if (landerRef.current) {
          landerRef.current.style.transform = `translateX(-50%) translateY(${scrollProgress * 150}px)`
          landerRef.current.style.opacity = 1 - scrollProgress
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="landing-section">
      <div className="mars-container">
        <img 
          src={marsImg}
          alt="Mars"
          className="mars-image"
        />
        {landerVisible && (
          <div ref={landerRef} className="mars-lander">
            🛸
          </div>
        )}
      </div>

      <div className="landing-content">
        <h2 className="landing-title">🔴 Touchdown on Mars</h2>
        <p className="landing-description">
          After 7 months of travel, the lander descends through the thin Martian
          atmosphere. Retro-rockets fire. Dust billows. Then... silence.
          <br /><br />
          <strong>Landing Facts:</strong> The "7 minutes of terror" refers to the
          autonomous landing sequence where radio signals take 20 minutes to reach Earth,
          meaning the lander must navigate the descent completely on its own.
        </p>
        <div className="landing-data">
          <div className="data-item">
            <span className="data-label">Atmosphere</span>
            <span className="data-value">95% CO₂</span>
          </div>
          <div className="data-item">
            <span className="data-label">Temperature</span>
            <span className="data-value">-60°C</span>
          </div>
          <div className="data-item">
            <span className="data-label">Gravity</span>
            <span className="data-value">38% of Earth</span>
          </div>
          <div className="data-item">
            <span className="data-label">Day Length</span>
            <span className="data-value">24h 37m</span>
          </div>
        </div>
        <div className="landing-fact">
          <span className="fact-icon">⏱️</span>
          <span>7 Minutes of Terror - Fully autonomous landing sequence</span>
        </div>
      </div>
    </section>
  )
}