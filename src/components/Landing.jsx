import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import marsImg from "../assets/mars.png"
import "./Landing.css"

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
  const sectionRef = useRef(null)
  const marsRef = useRef(null)
  const landerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Mars approach animation
    gsap.to(marsRef.current, {
      scale: 1.2,
      duration: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })

    // Lander descent
    gsap.to(landerRef.current, {
      y: 200,
      duration: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0.8 && landerRef.current) {
            landerRef.current.style.opacity = 0
          }
        }
      }
    })

    // Text reveal
    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="landing-section">
      <div className="mars-container">
        <img 
          ref={marsRef}
          src={marsImg}
          alt="Mars"
          className="mars-image"
        />
        <div ref={landerRef} className="mars-lander">🛸</div>
      </div>

      <div ref={textRef} className="landing-content">
        <h2 className="landing-title">Touchdown on Mars</h2>
        <p className="landing-description">
          After 7 months of travel, the lander descends through the thin Martian
          atmosphere. Retro-rockets fire. Dust billows. Then... silence.
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
        </div>
      </div>
    </section>
  )
}