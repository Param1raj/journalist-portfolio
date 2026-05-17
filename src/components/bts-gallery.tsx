"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function BTSGallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const items = [
    {
      id: 1,
      title: "ABP News Internship Credentials",
      category: "Credentials",
      caption: "Successfully completed a one-month intensive internship in the Editorial Department at ABP News, assisting in prime-time script writing and election tracker assemblies.",
      linkText: "View Internship Drive",
      link: "https://drive.google.com/drive/folders/1cHqv65crnl-Ei_wGMYwrTgBlzLKFEtqP",
      bgImage: "/images/zee_news_studio.png",
    },
    {
      id: 2,
      title: "Parliament of India Visit",
      category: "Visits",
      caption: "Classroom study visit to the Indian Parliament, studying legislative briefing procedures and newsroom reportage structures.",
      bgImage: "/images/parliament_visit.png",
    },
    {
      id: 3,
      title: "Zee News Studio Grounding",
      category: "Visits",
      caption: "Participating in Zee News editorial tracking desk assemblies, examining active control rooms, news anchors feeds, and live graphs.",
      bgImage: "/images/zee_news_studio.png",
    },
    {
      id: 4,
      title: "Prime Ministers Museum Study",
      category: "Visits",
      caption: "Special field assignment covering history and administrative beats at the high-tech Pradhanmantri Sangrahalaya (New Delhi).",
      bgImage: "/images/pm_museum_visit.png",
    },
    {
      id: 5,
      title: "Amar Ujala Newsroom Floor",
      category: "Visits",
      caption: "Studying print news production, copy-editing desks pipelines, page formatting, and editorial verification structures at Amar Ujala.",
      bgImage: "/images/amar_ujala_visit.png",
    },
    {
      id: 6,
      title: "JNU Olympic Sports Coverage",
      category: "On-Field Coverage",
      caption: "On-ground sports reporting and athletic camera work covering track and field events at JNU sports grounds.",
      bgImage: "/images/jnu_sports.png",
    },
  ]

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImage === null) return
    setActiveImage((activeImage + 1) % items.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImage === null) return
    setActiveImage((activeImage - 1 + items.length) % items.length)
  }

  return (
    <section id="gallery" className="py-12 px-6 md:px-12 bg-muted/10 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit mb-6 mx-auto md:mx-0">
              <span className="text-[10px] font-mono tracking-wider text-primary uppercase">
                स्मृतियां | The Journey BTS
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              दौरे और अनुभव | Classroom Visits & BTS
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-sm md:text-base">
              A physical photo journal of classroom field visits, live newsroom tracking, and editorial internship proof points at ABP News.
            </p>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveImage(idx)}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 55, damping: 15, delay: (idx % 3) * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card hover:border-primary/25 overflow-hidden transition-all duration-500 cursor-pointer shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              {/* Image Preview Block */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={item.bgImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px]" />
                
                {/* View Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                  <div className="flex items-center gap-2 bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" /> Expand Photo
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 border-t border-border bg-muted/20 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                
                {item.link && (
                  <div className="mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-primary hover:underline"
                    >
                      {item.linkText} &rarr;
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 select-none"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl border border-border bg-card overflow-hidden shadow-2xl p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-30"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-30 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-30 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Expanded Card Details */}
              <div className="flex flex-col items-center text-center">
                {/* Expanded Image Visual */}
                <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-muted mb-6 shadow-sm">
                  <img 
                    src={items[activeImage].bgImage} 
                    alt={items[activeImage].title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[10px] font-mono tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  {items[activeImage].category}
                </span>

                <h3 className="mt-4 font-serif text-xl md:text-2xl font-bold text-foreground max-w-lg">
                  {items[activeImage].title}
                </h3>

                <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {items[activeImage].caption}
                </p>

                {items[activeImage].link && (
                  <a
                    href={items[activeImage].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-6 py-2.5 rounded-full hover:bg-primary/95 transition-all shadow-md"
                  >
                    Open Drive Folder &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
