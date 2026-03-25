import { useEffect, useRef, useState } from "react"
import "./SpaceTravel.css"

export default function SpaceTravel() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / windowHeight)))
        setScrollProgress(progress * 100)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stars = Array.from({ length: 40 })

  return (
    <section ref={sectionRef} className="space-travel-section">
      <div className="space-stars">
        {stars.map((_, i) => (
          <div
            key={i}
            className="space-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="travel-content">
        <div className="travel-text">
          <h2 className="travel-title">🌌 6 Months in Space</h2>
          <p className="travel-description">
            The crew settles into life aboard the spacecraft. Days blend together
            as Earth shrinks to a blue dot behind them. Mars grows larger in the
            window each day.
            <br /><br />
            <strong>Did You Know?</strong> The journey to Mars takes about 7 months
            because spacecraft must follow a specific orbital path called a 
            "Hohmann Transfer Orbit" to conserve fuel.
          </p>
          
          <div className="distance-tracker">
            <div className="tracker-label">
              <span>🌍 Earth</span>
              <span>🔴 Mars</span>
            </div>
            <div className="tracker-bar">
              <div className="tracker-progress" style={{ width: `${scrollProgress}%` }}></div>
            </div>
            <p className="tracker-status">
              {Math.round((100 - scrollProgress) * 2.25)} Million KM to go →
            </p>
          </div>

          <div className="milestones">
            <div className="milestone">
              <span className="milestone-day">📅 Day 30</span>
              <p>Earth disappears from view - psychological milestone achieved</p>
            </div>
            <div className="milestone">
              <span className="milestone-day">☀️ Day 90</span>
              <p>Solar maximum - increased radiation protection protocols</p>
            </div>
            <div className="milestone">
              <span className="milestone-day">👁️ Day 150</span>
              <p>Mars visible to naked eye - excitement peaks among crew</p>
            </div>
          </div>
          
          <div className="space-fact">
            <span className="fact-icon">🛰️</span>
            <span>Current distance from Earth: {Math.round(225 - (scrollProgress * 2.25))} million km</span>
          </div>
        </div>
      </div>
    </section>
  )
}