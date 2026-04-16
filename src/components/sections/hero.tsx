'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import { Mail, Github, Linkedin, Download, Eye, MessageSquare } from '@/components/icons'

const HeroSection = () => {
  const [text, setText] = useState('')
  const [splineLoaded, setSplineLoaded] = useState(false)
  const fullText = 'Aspiring Software Engineer | AI Enthusiast | Full Stack Developer'
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const splineRef = useRef<HTMLDivElement>(null)
  
  const springConfig = { stiffness: 40, damping: 20 }
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])
  
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (splineRef.current) {
        const rect = splineRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    const handleLoad = () => setSplineLoaded(true)
    window.addEventListener('splineLoad', handleLoad)
    
    const splineContainer = splineRef.current
    if (splineContainer) {
      splineContainer.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (splineContainer) {
        splineContainer.removeEventListener('mousemove', handleMouseMove)
      }
      window.removeEventListener('splineLoad', handleLoad)
    }
  }, [mouseX, mouseY])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-5 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <div className="relative">
            <Spotlight className="-top-20 -left-8" fill="rgba(6, 182, 212, 0.3)" />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-400 text-sm tracking-[0.2em] mb-4"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight">
              Mahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kumari</span>
            </h1>

            <p className="text-xl text-white/70 mb-4 min-h-[2rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-white/50 max-w-md mb-8 leading-relaxed">
              Building AI-driven solutions and scalable applications that make an impact. 
              Passionate about creating innovative technology solutions for tomorrow&apos;s challenges.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} />
                View Projects
              </motion.a>

              <motion.a
                href="/Mahi Kumari CV.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-cyan-400 text-white rounded-full text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-cyan-400 text-white rounded-full text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={16} />
                Contact Me
              </motion.a>
            </div>

            <div className="flex gap-5">
              <motion.a
                href="https://github.com/Byte0111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mahi3110/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:mahimehta220@gmail.com"
                className="text-white/40 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={splineRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 relative h-[50vh] lg:h-[70vh]"
        >
          <div className="absolute inset-0 bg-gradient-to-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          
          <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" fill="rgba(6, 182, 212, 0.15)" />
          
          <motion.div
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              perspective: 1000,
            }}
            className="w-full h-full relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 transform translate-x-[-5%] scale-[1.3]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
          
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-cyan-500/20 blur-xl rounded-full" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection