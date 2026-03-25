import { useEffect, useRef, useState } from "react"
import "./Launch.css"

export default function Launch() {
  const [rocketPosition, setRocketPosition] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / windowHeight)))
        setRocketPosition(scrollProgress * 150)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="launch-section">
      <div className="launch-pad">
        <div className="smoke" style={{ opacity: rocketPosition / 100 }}></div>
        <div 
          className="launch-rocket-emoji"
          style={{ transform: `translateY(-${rocketPosition}px)` }}
        >
          🚀
        </div>
        <div className="launch-base"></div>
      </div>

      <div className="launch-content">
        <h2 className="launch-title">🚀 Ignition Sequence</h2>
        <p className="launch-description">
          The countdown reaches zero. Engines roar to life as the rocket lifts off
          from Kennedy Space Center, carrying humanity's hopes to the Red Planet.
          <br /><br />
          <strong>Mission Facts:</strong> The spacecraft reaches speeds of 25,000 km/h,
          using a combination of chemical propulsion and gravity assists to traverse
          the 225 million kilometer journey.
        </p>
        <div className="launch-stats">
          <div className="stat">
            <span className="stat-value">7</span>
            <span className="stat-label">Months Journey</span>
          </div>
          <div className="stat">
            <span className="stat-value">225M</span>
            <span className="stat-label">KM Distance</span>
          </div>
          <div className="stat">
            <span className="stat-value">25,000</span>
            <span className="stat-label">KM/H Speed</span>
          </div>
        </div>
        <div className="launch-fact">
          <span className="fact-icon">📡</span>
          <span>Communication delay to Earth: ~20 minutes</span>
        </div>
      </div>
    </section>
  )
}