"use client"

import { motion } from "framer-motion"
import { Mic, PenTool, CheckCircle, Search } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "service-1",
      title: "Ground Reporting & MoJo",
      icon: Mic,
      forWho: "National Broadcast & Digital Outlets",
      description: "Quick-turnaround field reporting, citizen interviews, local news coverage, and Pieces-To-Camera (PTC). Highly adaptable for field-work.",
      deliverables: [
        "Raw HD field footage & captures",
        "Researched field scripts",
        "Curated interviews & local reporting beats",
        "Ready PTC (Piece-To-Camera) segments",
      ],
      bg: "from-blue-500/5 to-indigo-500/5",
    },
    {
      id: "service-2",
      title: "Print Layout & InDesign Design",
      icon: PenTool,
      forWho: "News Desks, Publishers & Policy Booklets",
      description: "Crafting beautiful magazine covers, lab journals, budget digests, and corporate newsletters from raw text files into print-ready layouts.",
      deliverables: [
        "Adobe InDesign stylesheet templates",
        "Grid compositions & typographic spacing",
        "Print-ready PDFs (CMYK/RGB formats)",
        "Image treatments & layout edits",
      ],
      bg: "from-amber-500/5 to-orange-500/5",
    },
    {
      id: "service-3",
      title: "Copy Editing & Translation",
      icon: Search,
      forWho: "Think Tanks, Portals & Media Agencies",
      description: "Providing grammatical edits, fact-checking reviews, research compilations, and bilingual translations with strict context and tone validation.",
      deliverables: [
        "Bilingual checked Hindi-English articles",
        "Grammatical check & style guide compliance",
        "Misinformation check reports",
        "Rigorous development story research",
      ],
      bg: "from-emerald-500/5 to-teal-500/5",
    },
  ]


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  }

  return (
    <section id="services" className="py-12 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16 border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit mb-3">
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase">
              सेवाएं | Services
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            व्यावसायिक सेवाएं | What I Offer
          </h2>
        </div>
        <p className="mt-2 md:mt-0 text-xs text-muted-foreground max-w-sm leading-relaxed">
          Targeted editorial packages designed directly for digital media publications, print editors, and research fellows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-3xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/20 hover:scale-[1.01] hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="rounded-2xl bg-primary/5 border border-primary/10 p-3 text-primary shrink-0 mt-0.5 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground font-bold">
                      {service.forWho}
                    </span>
                  </div>
                </div>

                {/* --- Live Interactive Visualizer HUD --- */}
                {service.id === "service-1" && (
                  <div className="relative w-full h-36 bg-neutral-900 rounded-2xl overflow-hidden border border-border/80 font-mono text-[9px] text-white/80 p-3.5 mb-6 select-none shadow-md">
                    {/* Focal brackets */}
                    <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-white/30" />
                    <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-white/30" />
                    <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-white/30" />
                    <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-white/30" />
                    
                    {/* Live REC Indicator */}
                    <div className="flex justify-between items-center w-full relative z-10">
                      <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-hud-blink" />
                        <span className="text-[8px] font-bold">REC</span>
                      </div>
                      <span className="text-[8px] bg-black/40 px-2 py-0.5 rounded border border-white/5 font-bold">CH_01 +48V</span>
                    </div>

                    {/* Captions */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] text-white/40 tracking-widest uppercase font-bold pointer-events-none">
                      <span>PTC_ACTIVE // 50MM</span>
                      <span className="text-[7px] mt-1 text-primary/80">DHUL // GROUND_COVER</span>
                    </div>

                    {/* Audio levels */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-end relative z-10">
                      <span className="text-[7px] text-white/30">LEVEL: -12dB</span>
                      <div className="flex items-end gap-0.5 h-3.5">
                        <span className="w-0.5 bg-primary animate-audio-bar-1" />
                        <span className="w-0.5 bg-primary animate-audio-bar-2" />
                        <span className="w-0.5 bg-primary animate-audio-bar-3" />
                        <span className="w-0.5 bg-primary animate-audio-bar-4" />
                      </div>
                    </div>
                  </div>
                )}

                 {service.id === "service-2" && (
                  <div className="relative w-full h-36 bg-card border border-border rounded-2xl p-3.5 mb-6 flex gap-3 shadow-inner overflow-hidden select-none bg-news-grid">
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none z-0" />
                    
                    {/* Glowing vertical laser scan line */}
                    <div className="absolute left-0 right-0 h-[1.5px] bg-primary/45 shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-scan-line pointer-events-none z-20" />

                    {/* Double page sheet mock */}
                    <div className="flex-1 border border-border bg-card rounded-lg p-2 flex flex-col gap-1.5 shadow-sm relative z-10">
                      <div className="w-full h-2 bg-primary/20 rounded-sm animate-pulse" />
                      <div className="grid grid-cols-2 gap-1.5 flex-1">
                        <div className="flex flex-col gap-1 border-r border-border/40 pr-1">
                          <div className="w-full h-1 bg-foreground/10 rounded-sm animate-pulse" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="w-full h-1.5 bg-primary/10 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                        </div>
                      </div>
                      <div className="w-fit bg-muted px-1.5 py-0.5 rounded text-[6px] font-mono text-muted-foreground border border-border">PAGE_01 // PRINT_READY</div>
                    </div>

                    <div className="flex-1 border border-border bg-card rounded-lg p-2 flex flex-col gap-1.5 shadow-sm relative z-10">
                      <div className="w-full h-2 bg-muted rounded-sm animate-pulse" />
                      <div className="grid grid-cols-2 gap-1.5 flex-1">
                        <div className="flex flex-col gap-1 border-r border-border/40 pr-1">
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="w-full h-1.5 bg-foreground/10 rounded-sm animate-pulse" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                          <div className="w-full h-1 bg-foreground/5 rounded-sm" />
                        </div>
                      </div>
                      <div className="w-fit bg-muted px-1.5 py-0.5 rounded text-[6px] font-mono text-muted-foreground border border-border">PAGE_02 // PRINT_READY</div>
                    </div>
                  </div>
                )}

                {service.id === "service-3" && (
                  <div className="w-full h-36 bg-muted border border-border rounded-2xl p-3.5 mb-6 flex flex-col justify-between font-mono text-[9px] text-muted-foreground shadow-inner select-none">
                    <div className="border-b border-border pb-1.5 flex justify-between items-center">
                      <span className="font-bold text-[8px] text-foreground">BILINGUAL EDITOR DESK</span>
                      <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[7px] font-bold animate-pulse">✓ EDIT_PASSED</span>
                    </div>

                    {/* Compare Translation panels */}
                    <div className="space-y-1.5 py-1">
                      <div className="flex gap-1.5 items-start">
                        <span className="text-primary font-bold shrink-0">HIN:</span>
                        <div className="text-foreground/80 leading-normal truncate italic font-serif flex items-center gap-0.5">
                          <span>&ldquo;धरातल से आई रिपोर्ट के तथ्य असत्यापित थे, हमने ठीक किये...&rdquo;</span>
                          <span className="w-1 h-3 bg-primary animate-hud-blink shrink-0 inline-block" />
                        </div>
                      </div>
                      <div className="text-center text-foreground/35 text-[8px] py-0.5 animate-pulse font-bold tracking-wider">↓ CONTEXTUAL TRANSLATION ↓</div>
                      <div className="flex gap-1.5 items-start">
                        <span className="text-emerald-500 font-bold shrink-0">ENG:</span>
                        <div className="text-foreground/85 leading-normal truncate font-sans font-medium flex items-center gap-0.5">
                          <span>&ldquo;Ground report data was unverified; corrected under protocols...&rdquo;</span>
                          <span className="w-1 h-3 bg-emerald-500 animate-hud-blink shrink-0 inline-block" />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-1.5 text-[7px] text-muted-foreground/60 text-right">
                      VERIFIED COPY // STYLESHEET_MATCHED
                    </div>
                  </div>
                )}
                {/* --- End Visualizers --- */}

                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-6 border-t border-border">
                  <h4 className="text-xs font-mono tracking-wider text-foreground uppercase mb-4 font-bold">
                    Key Deliverables:
                  </h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-normal">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitch Trigger link */}
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-semibold py-3 rounded-full transition-all duration-300"
                >
                  Book Package / Pitch Story
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
