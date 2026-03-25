import { useState, useEffect, useRef } from "react"
import roverImg from "../assets/rover.png"
import "./Exploration.css"

export default function Exploration() {
  const [activeDiscovery, setActiveDiscovery] = useState(null)
  const [roverX, setRoverX] = useState(0)
  const sectionRef = useRef(null)
  const roverRef = useRef(null)

  const discoveries = [
    { 
      id: 1, 
      name: "💧 Water Ice", 
      title: "Water Ice Discovery",
      description: "Evidence of ancient rivers and lakes discovered in Jezero Crater. This confirms that Mars once had liquid water on its surface, a key requirement for life.",
      fact: "Enough water ice exists at the poles to cover the entire planet in 35 feet of water!"
    },
    { 
      id: 2, 
      name: "🧪 Organic Molecules", 
      title: "Organic Molecules",
      description: "Building blocks of life found in Martian soil samples by the Curiosity rover. These carbon-based molecules are essential for life as we know it.",
      fact: "Organic molecules have been found in multiple locations across Mars!"
    },
    { 
      id: 3, 
      name: "🌫️ Methane Spikes", 
      title: "Methane Mystery",
      description: "Seasonal methane emissions hint at possible microbial life or geological activity. Methane breaks down quickly in sunlight, suggesting recent production.",
      fact: "Methane levels spike in summer and drop in winter - a pattern similar to Earth!"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / windowHeight)))
        setRoverX(progress * 80)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="exploration-section">
      <div className="rover-container">
        <img 
          ref={roverRef}
          src={roverImg}
          alt="Mars Rover"
          className="mars-rover-img"
          style={{ transform: `translateX(${roverX}px)` }}
        />
        <div className="rover-tracks"></div>
      </div>

      <div className="exploration-content">
        <h2 className="exploration-title">🔬 Exploring the Red Planet</h2>
        <p className="exploration-description">
          The Perseverance rover rolls across the Martian surface, searching for signs
          of ancient life and collecting samples for future return to Earth.
          <br /><br />
          <strong>Mission Goals:</strong> Collect 30 rock core samples, test oxygen production,
          and pave the way for human exploration.
        </p>

        <div className="discoveries-grid">
          {discoveries.map(discovery => (
            <div
              key={discovery.id}
              className={`discovery-card ${activeDiscovery === discovery.id ? 'active' : ''}`}
              onClick={() => setActiveDiscovery(activeDiscovery === discovery.id ? null : discovery.id)}
            >
              <div className="discovery-icon">{discovery.name.split(' ')[0]}</div>
              <h3 className="discovery-name">{discovery.name.split(' ')[1] || discovery.name}</h3>
              {activeDiscovery === discovery.id && (
                <>
                  <p className="discovery-description">{discovery.description}</p>
                  <div className="discovery-fact">
                    <span className="fact-icon">📊</span>
                    <span>{discovery.fact}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="exploration-stats">
          <div className="exp-stat">
            <span className="exp-stat-number">30+</span>
            <span className="exp-stat-label">Rock Samples</span>
          </div>
          <div className="exp-stat">
            <span className="exp-stat-number">2.3B</span>
            <span className="exp-stat-label">Years Old</span>
          </div>
          <div className="exp-stat">
            <span className="exp-stat-number">2031</span>
            <span className="exp-stat-label">Sample Return</span>
          </div>
        </div>

        <button 
          className="rover-button" 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          Continue Mission →
        </button>
      </div>
    </section>
  )
}