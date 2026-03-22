import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Launch.css"

gsap.registerPlugin(ScrollTrigger)

export default function Launch() {
  const sectionRef = useRef(null)
  const rocketRef = useRef(null)
  const smokeRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
  // Simplified rocket animation - no smoke, shorter duration
  gsap.to(rocketRef.current, {
    y: -150,  // Reduced from -200
    duration: 1,  // Reduced from 1.5
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 0.5  // Reduced from 0.8
    }
  })

  // Text reveal - simplified
  gsap.fromTo(textRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )
}, [])

  return (
    <section ref={sectionRef} className="launch-section">
      <div className="launch-pad">
        <div ref={smokeRef} className="smoke"></div>
        <div ref={rocketRef} className="launch-rocket">
          🚀
        </div>
        <div className="launch-base"></div>
      </div>

      <div ref={textRef} className="launch-content">
        <h2 className="launch-title">Ignition Sequence</h2>
        <p className="launch-description">
          The countdown reaches zero. Engines roar to life as the rocket lifts off
          from Kennedy Space Center, carrying humanity's hopes to the Red Planet.
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
      </div>
    </section>
  )
}