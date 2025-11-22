import React from 'react'
import Hero from './components/Hero'
import HoloPanels from './components/HoloPanels'
import Showcase from './components/Showcase'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300/30 selection:text-white">
      {/* Background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      </div>

      <Header />
      <Hero />
      <HoloPanels />
      <Showcase />

      <footer className="relative border-t border-cyan-400/10 py-10 text-center text-cyan-200/60">
        Built for an engineering graduate — clean, high-tech, and immersive.
      </footer>
    </div>
  )
}

export default App
