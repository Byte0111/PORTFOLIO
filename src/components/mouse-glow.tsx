'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-80 h-80 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        left: mousePosition.x - 160,
        top: mousePosition.y - 160,
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  )
}