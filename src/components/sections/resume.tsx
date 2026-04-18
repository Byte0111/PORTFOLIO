'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { Download, Calendar, GraduationCap, Award, Trophy } from '@/components/icons'

// ─── Types ───────────────────────────────────────────────────────────────────

type IconComponent = React.ElementType

type ResumeItem = {
  title: string
  subtitle: string
  date: string
  details?: string
}

type ResumeSectionData = {
  title: string
  icon: IconComponent
  items: ResumeItem[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const RESUME_SECTIONS: ResumeSectionData[] = [
  {
    title: 'Education',
    icon: GraduationCap,
    items: [
      {
        title: 'B.Tech in Computer Science',
        subtitle: 'Sikkim Manipal Institute of Technology',
        date: '2023 – 2027',
        details: 'CGPA: 8.0',
      },
    ],
  },
  {
    title: 'Achievements',
    icon: Trophy,
    items: [
      {
        title: 'Runner-up: DSA Contest',
        subtitle: 'Tech Fest',
        date: '2024',
      },
    ],
  },
  {
    title: 'Certifications',
    icon: Award,
    items: [
      { title: 'Gen AI Prompt Engineering', subtitle: 'Coursera', date: '2024' },
      { title: 'Google Cloud Computing', subtitle: 'Google Cloud', date: '2024' },
      { title: 'Google Cybersecurity', subtitle: 'Google', date: '2024' },
    ],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionBlock({
  section,
  delay,
  isInView,
}: {
  section: ResumeSectionData
  delay: number
  isInView: boolean
}) {
  const Icon = section.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-cyan-400" />
        <h3 className="text-lg font-semibold text-white">{section.title}</h3>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {section.items.map((item) => (
          <div key={item.title} className="pl-8 border-l-2 border-white/10">
            <p className="text-white font-medium">{item.title}</p>
            <p className="text-white/60 text-sm">{item.subtitle}</p>
            <p className="text-white/40 text-xs flex items-center gap-1 mt-1">
              <Calendar size={12} />
              {item.date}
              {item.details && ` • ${item.details}`}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A quick overview of my education and achievements
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl rounded-2xl" />

            <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-6">
              {RESUME_SECTIONS.map((section, index) => (
                <SectionBlock
                  key={section.title}
                  section={section}
                  delay={0.3 + index * 0.1}
                  isInView={isInView}
                />
              ))}

              {/* Divider + Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 border-t border-white/10"
              >
                <motion.a
                  href="/Mahi_new_cv.pdf"
                  download="Mahi_new_cv.pdf"
                  type="application/pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}