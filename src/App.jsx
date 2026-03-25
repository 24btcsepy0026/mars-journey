import { useState } from "react"
import Hero from "./components/Hero"
import Launch from "./components/Launch"
import SpaceTravel from "./components/SpaceTravel"
import Landing from "./components/Landing"
import Exploration from "./components/Exploration"
import Conclusion from "./components/Conclusion"
import LoadingScreen from "./components/LoadingScreen"
import ScrollProgress from "./components/ScrollProgress"
import ThemeToggle from "./components/ThemeToggle"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ThemeToggle />
      <ScrollProgress />
      <Hero />
      <Launch />
      <SpaceTravel />
      <Landing />
      <Exploration />
      <Conclusion />
    </>
  )
}

export default App