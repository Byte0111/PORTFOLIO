'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, Code } from '@/components/icons'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'AutoHostel CRM',
    description: 'Complaint Resolution Manager with role-based dashboards, complaint tracking, status updates, filtering, and history management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Phishing Email Detection',
    description: 'Machine Learning-based phishing detection system with 95% accuracy and large-scale email analysis.',
    tech: ['Python', 'Machine Learning', 'Flask'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Mini Intrusion Detection System',
    description: 'Python-based IDS with anomaly detection dashboard and real-time alerts.',
    tech: ['Python', 'Flask', 'Machine Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Indexing and Content Retrieval',
    description: 'Lightweight YOLO-based real-time indexing system with face detection, object tracking, and metadata generation.',
    tech: ['YOLO', 'Python', 'OpenCV', 'AI'],
    github: '#',
    demo: '#',
  },
]

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
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
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? 2 : 0,
                  rotateY: hoveredIndex === index ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'relative bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden',
                  'backdrop-blur-sm transition-all duration-300',
                  'hover:border-cyan-500/50',
                  'before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r',
                  'before:from-cyan-500/50 before:via-blue-500/50 before:to-purple-500/50',
                  'before:opacity-0 before:transition-opacity',
                  'before:group-hover:opacity-100',
                  'after:absolute after:inset-0 after:rounded-2xl after:opacity-0',
                  'after:bg-gradient-to-r after:from-cyan-500/20 after:via-blue-500/20 after:to-purple-500/20',
                  'after:transition-opacity after:group-hover:opacity-100'
                )}
              >
                <div className="relative p-6 bg-zinc-900/90 rounded-2xl m-px">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl 
                    group-hover:bg-cyan-500/20 transition-all duration-500" />
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/60 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 
                          border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg 
                        bg-white/5 hover:bg-white/10 text-white border border-white/10 
                        hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg 
                        bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 
                        border border-cyan-500/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection