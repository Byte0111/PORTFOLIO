'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Calendar, Check, Users, GraduationCap, Brain, Cloud, Shield } from '@/components/icons'
import { cn } from '@/lib/utils'

const experiences = [
  {
    title: 'DSA Lead at Encoders Coding Club',
    organization: 'Encoders Coding Club',
    date: '2024 - Present',
    description: 'Leading the Data Structures and Algorithms wing, organizing weekly coding sessions and competitions.',
    icon: Users,
    type: 'leadership',
  },
  {
    title: 'Runner-up in DSA Contest',
    organization: 'Tech Fest',
    date: '2024',
    description: 'Secured runner-up position in the Data Structures and Algorithms competition.',
    icon: Trophy,
    type: 'achievement',
  },
  {
    title: 'Gen AI Prompt Engineering Certification',
    organization: 'Coursera',
    date: '2024',
    description: 'Certified in Generative AI and Prompt Engineering techniques.',
    icon: Brain,
    type: 'certification',
  },
  {
    title: 'Google Cloud Computing Certification',
    organization: 'Google Cloud',
    date: '2024',
    description: 'Certified in Google Cloud Platform fundamentals.',
    icon: Cloud,
    type: 'certification',
  },
  {
    title: 'Google Cybersecurity Certification',
    organization: 'Google',
    date: '2024',
    description: 'Certified in cybersecurity fundamentals and best practices.',
    icon: Shield,
    type: 'certification',
  },
  {
    title: '200+ Leetcode Problems Solved',
    organization: 'LeetCode',
    date: '2023 - Present',
    description: 'Consistently solving algorithmic problems to strengthen problem-solving skills.',
    icon: Check,
    type: 'achievement',
  },
]

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            Experience & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Leadership roles, certifications, and accomplishments
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative flex items-center',
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                <div className={cn(
                  'flex-1',
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                )}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={cn(
                      'relative p-6 rounded-xl border border-white/10 bg-zinc-900/50',
                      'backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300',
                      'before:absolute before:inset-0 before:rounded-xl before:p-[1px]',
                      'before:bg-gradient-to-r before:from-cyan-500/20 before:to-blue-500/20',
                      'before:opacity-0 before:transition-opacity',
                      'hover:before:opacity-100'
                    )}
                  >
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <exp.icon size={20} className="text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      </div>
                      <p className="text-white/50 text-sm mb-2">{exp.organization}</p>
                      <p className="text-white/40 text-xs mb-3 flex items-center gap-1 
                        md:justify-end">
                        <Calendar size={12} />
                        {exp.date}
                      </p>
                      <p className="text-white/60 text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
                    bg-cyan-500 border-4 border-black z-10"
                />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection