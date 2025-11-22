import React from 'react'
import { Play, Camera, Layers, FileCog } from 'lucide-react'

const Panel = ({ title, icon: Icon, children }) => (
  <div className="group relative flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-4 text-cyan-100/90 shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-xl transition hover:border-cyan-400/40">
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-sm font-semibold tracking-wide">{title}</span>
    </div>
    <div className="text-xs text-cyan-200/70">{children}</div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-400/10" />
  </div>
)

const HoloPanels = () => {
  return (
    <div className="relative -mt-16 z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <Panel title="Blueprint Layer" icon={Layers}>
          CAD diagrams, dimension lines, and callouts overlay the 3D motion.
        </Panel>
        <Panel title="Cinematic Render" icon={Camera}>
          Soft neon blues, metallic gradients, and sharp reflections.
        </Panel>
        <Panel title="Animation Frames" icon={Play}>
          Rotating models, gear trains, and robotic arm IK sequences.
        </Panel>
        <Panel title="Exploded Views" icon={FileCog}>
          Precision assemblies separate to reveal inner engineering.
        </Panel>
      </div>
    </div>
  )
}

export default HoloPanels
