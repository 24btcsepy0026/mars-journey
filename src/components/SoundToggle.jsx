import { useState, useRef, useEffect } from "react"
import "./SoundToggle.css"

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create a simple ambient sound using Web Audio API
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (AudioContext) {
      const audioCtx = new AudioContext()
      const oscillator = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      
      oscillator.type = "sine"
      oscillator.frequency.value = 110 // Lower frequency for ambient feel
      gainNode.gain.value = 0
      
      oscillator.start()
      
      audioRef.current = { audioCtx, oscillator, gainNode }
      
      return () => {
        oscillator.stop()
        audioCtx.close()
      }
    }
  }, [])

  const toggleSound = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmute - start sound
        audioRef.current.audioCtx.resume()
        audioRef.current.gainNode.gain.value = 0.08 // Low volume ambient
        setIsMuted(false)
      } else {
        // Mute - stop sound
        audioRef.current.gainNode.gain.value = 0
        setIsMuted(true)
      }
    } else {
      // Toggle without sound (visual only)
      setIsMuted(!isMuted)
    }
  }

  return (
    <button className="sound-toggle" onClick={toggleSound} aria-label="Toggle sound">
      {isMuted ? '🔇' : '🔊'}
    </button>
  )
}