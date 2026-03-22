import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import roverImg from "../assets/rover.png"
import "./Exploration.css"

gsap.registerPlugin(ScrollTrigger)

export default function Exploration() {
  const [activeRover, setActiveRover] = useState(null)
  const sectionRef = useRef(null)
  const roverRef = useRef(null)

  const discoveries = [
    { id: 1, name: "Water Ice", icon: "💧", description: "Evidence of ancient rivers and lakes discovered in Jezero Crater." },
    { id: 2, name: "Organic Molecules", icon: "🧪", description: "Building blocks of life found in Martian soil samples." },
    { id: 3, name: "Methane Spikes", icon: "🌫️", description: "Seasonal methane emissions hint at possible microbial life." }
  ]

  useEffect(() => {
    gsap.fromTo(roverRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="exploration-section">
      <div className="rover-container">
        <img 
          ref={roverRef}
          src={roverImg}
          alt="Mars Rover"
          className="mars-rover-img"
        />
        <div className="rover-tracks"></div>
      </div>

      <div className="exploration-content">
        <h2 className="exploration-title">Exploring the Red Planet</h2>
        <p className="exploration-description">
          The Perseverance rover rolls across the Martian surface, searching for signs
          of ancient life and collecting samples for future return to Earth.
        </p>

        <div className="discoveries-grid">
          {discoveries.map(discovery => (
            <div
              key={discovery.id}
              className={`discovery-card ${activeRover === discovery.id ? 'active' : ''}`}
              onClick={() => setActiveRover(activeRover === discovery.id ? null : discovery.id)}
            >
              <div className="discovery-icon">{discovery.icon}</div>
              <h3 className="discovery-name">{discovery.name}</h3>
              {activeRover === discovery.id && (
                <p className="discovery-description">{discovery.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="interactive-rover">
          <button className="rover-button" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Continue Mission →
          </button>
        </div>
      </div>
    </section>
  )
}