import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./SpaceTravel.css"

gsap.registerPlugin(ScrollTrigger)

export default function SpaceTravel() {
  const sectionRef = useRef(null)
  const starsRef = useRef([])
  const textRef = useRef(null)

  useEffect(() => {
    // Parallax stars effect
    starsRef.current.forEach((star, i) => {
      gsap.to(star, {
        x: (i % 2 === 0 ? -200 : 200),
        duration: 3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })
    })

    // Text reveal
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  const stars = Array.from({ length: 50 })

  return (
    <section ref={sectionRef} className="space-travel-section">
      <div className="space-stars">
        {stars.map((_, i) => (
          <div
            key={i}
            ref={el => starsRef.current[i] = el}
            className="space-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="travel-content">
        <div ref={textRef} className="travel-text">
          <h2 className="travel-title">6 Months in Space</h2>
          <p className="travel-description">
            The crew settles into life aboard the spacecraft. Days blend together
            as Earth shrinks to a blue dot behind them. Mars grows larger in the
            window each day.
          </p>
          
          <div className="distance-tracker">
            <div className="tracker-label">
              <span>Earth</span>
              <span>Mars</span>
            </div>
            <div className="tracker-bar">
              <div className="tracker-progress"></div>
            </div>
            <p className="tracker-status">225 Million KM to go →</p>
          </div>

          <div className="milestones">
            <div className="milestone">
              <span className="milestone-day">Day 30</span>
              <p>Earth disappears from view</p>
            </div>
            <div className="milestone">
              <span className="milestone-day">Day 90</span>
              <p>First solar flare encounter</p>
            </div>
            <div className="milestone">
              <span className="milestone-day">Day 150</span>
              <p>Mars visible to naked eye</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}