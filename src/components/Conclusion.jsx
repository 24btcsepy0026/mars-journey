import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Conclusion.css"

gsap.registerPlugin(ScrollTrigger)

export default function Conclusion() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const colonyRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    gsap.fromTo(colonyRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="conclusion-section">
      <div className="future-colony" ref={colonyRef}>
        <div className="colony-dome">🏛️</div>
        <div className="colony-dome">🏠</div>
        <div className="colony-dome">🔬</div>
        <div className="colony-dome">🌱</div>
      </div>

      <div ref={textRef} className="conclusion-content">
        <h2 className="conclusion-title">The Future of Mars</h2>
        <p className="conclusion-description">
          This is just the beginning. By 2040, the first permanent Mars colony
          will be established. By 2050, a million humans will call Mars home.
          The journey continues...
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