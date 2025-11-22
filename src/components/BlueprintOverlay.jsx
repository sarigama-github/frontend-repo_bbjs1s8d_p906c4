import React from 'react'

const grid = Array.from({ length: 40 })

const BlueprintOverlay = () => {
  return (
    <div className="relative isolate">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Crosshair accents */}
      <div className="absolute inset-0">
        {grid.map((_, i) => (
          <div key={i} className="absolute h-px w-8 bg-cyan-400/20" style={{ top: `${(i%20)*5}%`, left: `${(i%20)*5}%` }} />
        ))}
      </div>
      {/* Content slot */}
      <div className="relative">
        {/* children injected by parent */}
      </div>
    </div>
  )
}

export default BlueprintOverlay
