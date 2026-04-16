'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Leetcode Problems', value: 200, suffix: '+' },
  { label: 'Major Projects', value: 4, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '+' },
]

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const timers = stats.map((stat, index) => {
        const increment = stat.value / steps
        let current = 0
        return setInterval(() => {
          current += increment
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = Math.min(Math.round(current), stat.value)
            return newCounters
          })
        }, interval)
      })

      return () => timers.forEach(clearInterval)
    }
  }, [isInView])

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A passionate software engineer dedicated to building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl rounded-2xl" />
              <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white font-serif mb-4">
                  Mahi Kumari
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  I am a B.Tech student at Sikkim Manipal Institute of Technology, 
                  specializing in Computer Science. With a strong foundation in Data 
                  Structures, Algorithms, and Full-Stack Development, I build 
                  AI-driven solutions and scalable applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-white/70">B.Tech in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-white/70">Sikkim Manipal Institute of Technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-white/70">CGPA: 8.0</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-white/70">Graduation: July 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 
                  rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-zinc-900/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">{stat.label}</span>
                    <span className="text-3xl font-bold text-cyan-400">
                      {counters[index]}{stat.suffix}
                    </span>
                  </div>
                  <div className="mt-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection