'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cpu, Brain, Database, Cloud, Shield, Sparkles } from '@/components/icons'
import { cn } from '@/lib/utils'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C++', 'Java', 'SQL', 'MongoDB'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: ['React.js', 'Node.js', 'Express.js'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: ['Machine Learning', 'YOLO', 'Phishing Detection', 'Intrusion Detection'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Core CS',
    icon: Cpu,
    skills: ['DSA', 'DBMS', 'Operating Systems'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Cloud / Security',
    icon: Cloud,
    skills: ['Google Cloud', 'Cybersecurity'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Gen AI',
    icon: Sparkles,
    skills: ['Prompt Engineering', 'Gen AI'],
    gradient: 'from-yellow-500 to-amber-500',
  },
]

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className={cn(
                'relative p-6 rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm',
                'overflow-hidden transition-all duration-300 hover:border-white/20',
                'before:absolute before:inset-0 before:bg-gradient-to-br',
                `before:${category.gradient} before:opacity-0 before:transition-opacity`,
                'before:group-hover:opacity-10'
              )}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon size={24} className="text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className={cn(
                          'px-3 py-1 text-sm rounded-full bg-white/5 text-white/80',
                          'border border-white/10 hover:border-white/30 hover:bg-white/10',
                          'transition-all duration-200 cursor-default'
                        )}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection