import React from 'react'

const Header = () => {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-lg font-semibold tracking-wide text-white/90">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">MECH</span>
          <span className="text-white/60">•</span>
          <span className="text-white">PORT</span>
        </div>
        <nav className="hidden gap-6 text-sm text-cyan-100/80 md:flex">
          <a className="hover:text-white" href="#work">Work</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
