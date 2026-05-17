"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowDown, Mail } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  }

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-12 overflow-hidden bg-news-grid">
      {/* Editorial Decorative Grid Lines */}
      <div className="absolute top-0 bottom-0 left-[4%] sm:left-[10%] w-[1px] bg-border" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-border" />
      
      {/* Light Theme Accent Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Credentials Tag */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 backdrop-blur-md shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-muted-foreground uppercase">
            IIMC HINDI JOURNALISM • ABP NEWS INTERN
          </span>
        </motion.div>

        {/* Main Title (Hindi Bold Serif & English Translation) */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15]"
        >
          तथ्यों की खोज, धरातल से आवाज़,
          <br className="hidden md:inline" />
          और उत्कृष्ट <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600 dark:to-amber-500">संपादन</span>।
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-sans"
        >
          A Hindi Journalism student at the Indian Institute of Mass Communication (IIMC), New Delhi, and former Editorial Intern at ABP News. Fusing scientific clarity with on-ground Mojo coverage and print design.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <MagneticButton>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md group animate-shine"
            >
              अनुभव देखें | View Portfolio
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground border border-border text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
            >
              सीधा संपर्क | Direct Pitch
              <Mail className="w-4 h-4" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
