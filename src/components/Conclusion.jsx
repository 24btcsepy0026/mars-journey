import { useEffect, useRef, useState } from "react"
import "./Conclusion.css"

export default function Conclusion() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const isVisibleNow = rect.top < windowHeight - 100
        setIsVisible(isVisibleNow)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const colonies = [
    { icon: "🏛️", name: "Habitat Dome", year: "2030" },
    { icon: "🏠", name: "Living Quarters", year: "2032" },
    { icon: "🔬", name: "Research Lab", year: "2035" },
    { icon: "🌱", name: "Greenhouse", year: "2038" },
    { icon: "🏭", name: "Manufacturing", year: "2040" },
    { icon: "🎓", name: "University", year: "2045" }
  ]

  return (
    <section ref={sectionRef} className="conclusion-section">
      <div className={`future-colony ${isVisible ? 'visible' : ''}`}>
        {colonies.map((colony, index) => (
          <div key={index} className="colony-dome" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="dome-icon">{colony.icon}</div>
            <span className="dome-name">{colony.name}</span>
            <span className="dome-year">{colony.year}</span>
          </div>
        ))}
      </div>

      <div className={`conclusion-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="conclusion-title">🌟 The Future of Mars</h2>
        <p className="conclusion-description">
          This is just the beginning. By 2040, the first permanent Mars colony
          will be established. By 2050, a million humans will call Mars home.
          The journey continues...
          <br /><br />
          <strong>Why Mars?</strong> Mars offers the best hope for human expansion
          beyond Earth. Its day length (24.6 hours), axial tilt (similar to Earth),
          and potential for terraforming make it our most viable second home.
        </p>

        <div className="future-timeline">
          <div className="timeline-point">
            <span className="timeline-year">2026</span>
            <p>First crewed mission lands</p>
          </div>
          <div className="timeline-point">
            <span className="timeline-year">2030</span>
            <p>First permanent habitat</p>
          </div>
          <div className="timeline-point">
            <span className="timeline-year">2040</span>
            <p>First Martian-born human</p>
          </div>
          <div className="timeline-point">
            <span className="timeline-year">2050</span>
            <p>1 million settlers</p>
          </div>
          <div className="timeline-point">
            <span className="timeline-year">2060</span>
            <p>Atmosphere terraforming begins</p>
          </div>
        </div>

        <div className="conclusion-fact">
          <span className="fact-icon">🚀</span>
          <span>Elon Musk's goal: 1 million people on Mars by 2050</span>
        </div>

        <button 
          className="restart-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          🚀 Start Journey Again
        </button>
      </div>
    </section>
  )
}