import { useEffect, useRef } from "react"
import gsap from "gsap"
import earthImg from "../assets/earth.png"
import "./Hero.css"

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const earthRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(earthRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)" },
      "-=0.8"
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    )
  }, [])

  // Create stars
  const stars = Array.from({ length: 30 })

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
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <h1 ref={titleRef} className="hero-title">
        Journey to <span className="mars-text">Mars</span>
      </h1>

      <div className="planet-container">
        <img 
          ref={earthRef}
          src={earthImg}
          alt="Earth"
          className="earth-image"
        />
      </div>

      <p ref={subtitleRef} className="hero-subtitle">
        From Earth to the Red Planet
      </p>

      <div className="countdown">
        <span className="countdown-label">Launch in</span>
        <div className="countdown-numbers">
          <span className="countdown-number">3</span>
          <span className="countdown-number">2</span>
          <span className="countdown-number">1</span>
          <span className="countdown-number blastoff">LIFT OFF!</span>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to Begin Journey</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}