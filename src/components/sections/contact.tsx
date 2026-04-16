'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Github, Linkedin } from '@/components/icons'
import { cn } from '@/lib/utils'

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSending(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
                blur-xl rounded-2xl" />
              <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                        placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                        placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                        placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 
                      bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg font-medium 
                      transition-colors disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 
                blur-xl rounded-2xl" />
              <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Mail size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Email</p>
                      <a 
                        href="mailto:mahimehta220@gmail.com"
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        mahimehta220@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <MapPin size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Location</p>
                      <p className="text-white">Kolkata, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-4">Social Links</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/Byte0111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                        hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <Github size={20} className="text-white/70" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/mahi3110/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                        hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <Linkedin size={20} className="text-white/70" />
                    </motion.a>
                    <motion.a
                      href="mailto:mahimehta220@gmail.com"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                        hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <Mail size={20} className="text-white/70" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection