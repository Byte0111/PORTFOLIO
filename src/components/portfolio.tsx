'use client'

import { motion } from 'framer-motion'
import HeroSection from './sections/hero'
import AboutSection from './sections/about'
import SkillsSection from './sections/skills'
import ProjectsSection from './sections/projects'
import ExperienceSection from './sections/experience'
import ResumeSection from './sections/resume'
import ContactSection from './sections/contact'
import FooterSection from './sections/footer'
import { LoadingScreen } from './loading-screen'
import { Starfield } from './starfield'

export function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen"
    >
      <LoadingScreen />
      <Starfield />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </motion.div>
  )
}