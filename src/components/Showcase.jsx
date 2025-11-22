import React from 'react'
import { motion } from 'framer-motion'
import { Cog, Gauge, Bot, Crosshair, Cuboid } from 'lucide-react'

const Card = ({ title, subtitle, icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 shadow-[0_0_60px_rgba(56,189,248,0.1)] backdrop-blur-xl"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-cyan-400/10 p-2 ring-1 ring-inset ring-cyan-400/20">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-cyan-200/70">{subtitle}</p>
      </div>
    </div>
    <div className="mt-4 text-cyan-100/90 text-sm leading-relaxed">{children}</div>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(59,130,246,0.12),transparent_50%)]" />
  </motion.div>
)

const Showcase = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Engineering Sequences</h2>
            <p className="mt-2 text-cyan-200/80">Designed for clarity, performance, and visual poetry.</p>
          </div>
          <div className="hidden md:block rounded-full border border-cyan-400/20 bg-slate-900/40 px-4 py-2 text-cyan-200/70">4K • Ray-traced highlights • 60 FPS</div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Gear Train" subtitle="Precision kinematics" icon={Cog}>
            Interlocking gear sets with ratio callouts and torque vectors; blueprint markers emphasize contact points.
          </Card>
          <Card title="Robotic Arm" subtitle="Inverse kinematics" icon={Bot}>
            A 6-DOF arm animates pick-and-place arcs; axis gimbals and motion graphs float as holograms.
          </Card>
          <Card title="Autonomous Drone" subtitle="Stability + control" icon={Crosshair}>
            PID overlays and thrust vectors guide smooth trajectories through neon-lit waypoints.
          </Card>
          <Card title="Exploded Assembly" subtitle="Reveal internals" icon={Cuboid}>
            Components separate along guide rails; annotations display part numbers and tolerances.
          </Card>
          <Card title="Flow Visualization" subtitle="Aerodynamics" icon={Gauge}>
            Streamlines and pressure gradients pulse over metallic surfaces with cinematic glows.
          </Card>
          <Card title="Blueprint Stage" subtitle="Clean staging" icon={Cog}>
            Monochrome blueprint palette with sharp reflections for a premium, minimal look.
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Showcase
