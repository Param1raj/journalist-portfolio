"use client"

import { motion } from "framer-motion"
import { Tv, TrendingUp, Radio, Shield } from "lucide-react"

export default function Biography() {
  const masterclasses = [
    {
      id: "class-1",
      teacher: "Rajeev Ranjan Sir (News 24)",
      topic: "Ground Reporting Nuances",
      icon: Tv,
      description: "Mastered spontaneous audience connection and MoJo coverage parameters.",
    },
    {
      id: "class-2",
      teacher: "Shishir Sinha Sir (Senior Journalist)",
      topic: "Financial & Budget Journalism",
      icon: TrendingUp,
      description: "Interpret complex budget data layouts into clear readable news columns.",
    },
    {
      id: "class-3",
      teacher: "Vikas Sir (Former Aaj Tak Journalist)",
      topic: "Television News Scriptwriting",
      icon: Radio,
      description: "Trained in timing voiceover copies directly matching live video sequences.",
    },
    {
      id: "class-4",
      teacher: "Vimalendu Pandey Sir (AIR Journalist)",
      topic: "Radio News & Modulation",
      icon: Radio,
      description: "Studied vocal pacing parameters and clear Hindi pronunciation models.",
    },
    {
      id: "class-5",
      teacher: "Nimish Kapoor Sir (Science Reporter)",
      topic: "Fact-Check & Verification",
      icon: Shield,
      description: "Acquired science-grade protocols to spot online fake-news vectors.",
    },
  ]

  return (
    <section id="story" className="py-12 px-6 md:px-12 bg-muted/20 border-y border-border scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Newspaper Fold Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Massive Premium Client Portrait (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 45, damping: 15 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none flex flex-col items-center sticky top-0 sm:top-24"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-border p-3 bg-card shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.005]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                <img 
                  src="/images/prashant_profile.png" 
                  alt="Prashant Pal" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                />
                {/* Visual Editorial frame tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Elegant Signature Details */}
            <div className="mt-6 w-full text-center border-t border-border pt-4">
              <h3 className="font-serif text-xl font-bold text-foreground">प्रशांत पाल | PRASHANT PAL</h3>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">Ground Reporter & Page Layout Editor</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                <span className="bg-primary/5 text-primary text-[8px] font-mono px-2 py-0.5 rounded border border-primary/10 font-bold uppercase tracking-wider">
                  IIMC New Delhi • 2026 Alumnus
                </span>
                <span className="bg-muted text-muted-foreground text-[8px] font-mono px-2 py-0.5 rounded border border-border font-bold uppercase tracking-wider">
                  ABP News Intern Desk
                </span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Spacious Editorial Narrative & Credentials (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit"
            >
              <span className="text-[9px] font-mono tracking-widest text-primary uppercase font-bold">
                संपादकीय प्रोफ़ाइल | Editorial Profile
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
            >
              सूत्र से शब्द तक: My Journey in News
            </motion.h2>

            {/* Premium Editorial Pull Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="relative border-l-4 border-primary pl-6 my-8"
            >
              <span className="font-serif text-6xl text-primary/10 absolute -top-8 left-2 select-none">“</span>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-foreground relative z-10 pt-1 font-medium">
                सच्ची पत्रकारिता वातानुकूलित स्टूडियो में बैठकर नहीं, बल्कि धूल, धूप और धरातल पर लोगों की आवाज़ सुनकर होती है।
              </p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground font-bold">
                — PRASHANT PAL, Ground Newsroom Axiom
              </p>
            </motion.div>

            {/* The Drop-Cap Biography */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed space-y-5"
            >
              <p className="relative">
                <span className="float-left text-5xl md:text-6xl font-serif font-bold text-primary mr-3 mt-1.5 select-none leading-none">
                  C
                </span>
                oming from a structured scientific background, I always approached my surroundings with strict, logical queries. But I quickly understood my true calling lay beyond laboratory grids—it was in seeking out local realities, validating complex facts, and delivering clear, impactful ground narratives directly to public newsrooms.
              </p>
              
              <p>
                This conviction led me to the prestigious <strong className="text-foreground font-serif">Hindi Journalism Department at the Indian Institute of Mass Communication (IIMC), New Delhi</strong>. Under veteran guidance, I translated logical rigour into beautiful news layouts—serving as Chief Page Editor and layout director for our annual Union Budget digest and classroom lab publications.
              </p>
              
              <p>
                My editorial internship at the <strong className="text-foreground font-serif">ABP News Editorial Desk</strong> cemented my skills. Operating in high-speed, prime-time newsrooms, I managed news feeds, handled urgent digital copy, and coordinated breaking reports under rigorous live deadlines.
              </p>
            </motion.div>

            {/* Credentials Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="mb-6">
                <h4 className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-bold">
                  VERIFIED JOURNALISM SPECIALIZATIONS & ACCREDITATIONS
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {masterclasses.map((cls, idx) => (
                  <motion.div 
                    key={cls.id} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                    className="group relative flex gap-3 border border-border/60 rounded-2xl p-4 hover:border-primary/20 hover:bg-card/40 transition-all duration-300 shadow-sm bg-card/20"
                  >
                    <div className="rounded-xl bg-primary/5 p-2.5 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/10 h-fit">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-muted-foreground block uppercase font-bold tracking-wider">
                        {cls.teacher}
                      </span>
                      <span className="text-xs font-serif font-bold text-foreground group-hover:text-primary transition-colors block mt-0.5 leading-tight">
                        {cls.topic}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-normal">
                        {cls.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
