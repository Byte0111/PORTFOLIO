'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from '@/components/icons'

const FooterSection = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Byte0111', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mahi3110/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mahimehta220@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <span className="text-xl font-bold text-white font-serif">MK</span>
            <span className="text-white/50">|</span>
            <span className="text-white/50 text-sm">
              © {currentYear} Mahi Kumari. All rights reserved.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 pt-6 border-t border-white/5 text-center"
        >
          <p className="text-white/30 text-sm">
            Built with{' '}
            <span className="text-cyan-400">React</span>
            {' + '}
            <span className="text-cyan-400">Framer Motion</span>
            {' + '}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterSection