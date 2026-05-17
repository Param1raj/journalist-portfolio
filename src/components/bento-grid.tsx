"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Video, FileText, Layout, Play } from "lucide-react"

export default function BentoGrid() {
  const cards = [
    {
      id: "card-1",
      title: "InDesign Lab Journal & Budget Special",
      badge: "Print Layouts / Design Sample",
      role: "Chief Editor & Chief Designer",
      outlet: "IIMC Publication Dept",
      description: "Designed the official 12-page budget digest for Union Budget 2025-26, and multiple classroom lab publications. Proof of top-tier typographic spacing, print-grid planning, and layout planning.",
      link: "https://drive.google.com/drive/folders/1hipTkBDvOFAJtqQHNDwwa6HKfKn8R8lK",
      icon: Layout,
      action: "Read Lab Journal",
      bgImage: "/images/budget_journal_preview.png",
    },
    {
      id: "card-2",
      title: "Delhi Elections 2025: Chandni Chowk",
      badge: "Ground Reporting / MoJo",
      role: "Reporter & Cameraman",
      outlet: "Assembly Election Beat",
      description: "Produced full field reporting at Chandni Chowk. Delivered an on-camera PTC covering civic grievances, voter expectations, and political currents.",
      link: "https://youtu.be/JasDDsttkH0?si=6udynmBZMsXSDJCY",
      icon: Video,
      action: "Watch Ground Report",
      bgImage: "/images/chandni_chowk_mojo.png",
    },
    {
      id: "card-3",
      title: "Broadcast News Package Editing",
      badge: "Video Editing / Voiceover",
      role: "Editor, Scriptwriter & Voiceover",
      outlet: "Broadcast Lab assignment",
      description: "Full multimedia packaging including scriptwriting, audio voice-over modulation, and Premiere timeline editing.",
      link: "https://youtu.be/9bECD9PECD0?si=ZLblrBSYxZOYeRq4",
      icon: Play,
      action: "Watch News Package",
      bgImage: "/images/news_package_editing.png",
    },
    {
      id: "card-4",
      title: "Fact Checking & Misinformation Research",
      badge: "Investigation / Science Beat",
      role: "Lead Fact-Checker & Researcher",
      outlet: "IIMC Factcheck Team",
      description: "A comprehensive analytical study investigating fake news triggers, misinformation spreading loops, and news verification guidelines. Complemented by full files of development reports.",
      link: "https://drive.google.com/file/d/1SI-NKEDOzhKwrP1ADKqkPCzfLm02bLwM/view?usp=drivesdk",
      icon: FileText,
      action: "Read Research Study",
      bgImage: "/images/fact_checking_research.png",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 45, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 55, damping: 15 },
    },
  }

  return (
    <section id="work" className="py-12 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="mb-16 border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit mb-3">
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase font-bold">
              चयनित कार्य अनुभव | Featured Work
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            समाचार दीर्घा & संपादन
          </h2>
        </div>
        <p className="mt-2 md:mt-0 text-xs text-muted-foreground max-w-sm leading-relaxed">
          Direct verified links to Union Budget design layouts, local video broadcasts, and science investigation guides.
        </p>
      </div>

      {/* Symmetrical 2x2 Magazine Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
        {cards.map((card, idx) => {
          const Icon = card.icon
          return (
            <motion.a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8 hover:border-primary/45 transition-all duration-500 hover:scale-[1.005] hover:shadow-md hover:shadow-primary/5 flex flex-col justify-between"
            >
              {/* Framed aspect-[16/9] Visual Mockup Pocket */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted mb-6 md:mb-8">
                {card.id !== "card-4" ? (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-102"
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    />
                    
                    {/* Visual play icon overlay for video packages */}
                    {(card.id === "card-2" || card.id === "card-3") && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="rounded-full bg-white/20 backdrop-blur-md border border-white/40 p-4 text-white shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-500">
                          <Play className="w-5 h-5 fill-white text-white" />
                        </div>
                      </div>
                    )}

                    {/* Subtle blueprint scan guidelines overlay for InDesign print card */}
                    {card.id === "card-1" && (
                      <>
                        <div className="absolute left-0 right-0 h-[1.5px] bg-primary/45 shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-scan-line pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-20" />
                        <div className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-10" />
                      </>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-stretch">
                    <div 
                      className="flex-1 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-102 sm:border-r sm:border-border/40"
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    />
                    <div className="hidden sm:flex w-1/3 bg-muted p-3 flex-col justify-between font-mono text-[8px] text-muted-foreground/80 select-none">
                      <div className="flex justify-between border-b border-border pb-1">
                        <span>RESEARCH</span>
                        <span className="text-primary font-bold">VERIFIED</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-foreground/15 rounded-sm" />
                        <div className="h-1 bg-foreground/5 rounded-sm" />
                      </div>
                      <span className="bg-primary/5 text-primary text-[7px] font-bold px-1.5 py-0.5 rounded border border-primary/10">IIMC_FACTCHECK</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent pointer-events-none" />
              </div>

              {/* High Contrast Spacious Content Block */}
              <div className="flex flex-col flex-1 justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="rounded-full bg-primary/5 border border-primary/15 p-2.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-muted-foreground uppercase bg-muted px-2.5 py-0.5 rounded-full border border-border font-bold">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-2 text-[10px] font-mono text-muted-foreground">
                      <span>Role: {card.role}</span>
                      <span className="text-foreground/20">•</span>
                      <span>{card.outlet}</span>
                    </div>
                    <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {card.action} <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
