import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, Atom, Cog, Drone, CircuitBoard } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tu1yYfmgsnYCLUIx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(16,185,255,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium tracking-wide text-cyan-200">Futuristic Engineering Portfolio</span>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Precision in Motion
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cyan-100/80">
            A cinematic 3D showcase blending mechanical realism and minimalist design — gears, robotic arms, drones, and exploded assemblies with blueprint overlays.
          </p>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Cog, label: 'Gears' },
              { icon: Atom, label: 'Robotic Arms' },
              { icon: Drone, label: 'Autonomous Drones' },
              { icon: CircuitBoard, label: 'Exploded Assemblies' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-slate-900/30 px-3 py-2 text-cyan-100/90 backdrop-blur-md">
                <Icon className="h-4 w-4 text-cyan-300" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
