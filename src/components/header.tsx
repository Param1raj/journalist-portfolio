"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowUpRight, Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Sync active theme class from HTML element on mount
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  const navLinks = [
    { label: "काम | Portfolio", href: "#work" },
    { label: "सफ़र | Story", href: "#story" },
    { label: "सेवाएं | Services", href: "#services" },
    { label: "स्मृतियां | Gallery", href: "#gallery" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300">
        <div className={`mx-auto max-w-7xl rounded-full border border-border bg-background/50 backdrop-blur-xl px-6 py-3 transition-all duration-300 ${scrolled ? "shadow-2xl shadow-black/10 border-border/60" : ""}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                प्रशांत पाल <span className="font-sans text-xs font-normal text-muted-foreground ml-1">/ Journalist</span>
              </span>
            </a>

            {/* Desktop Navigation & Actions */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-8 mr-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </a>
                ))}
              </nav>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-colors shadow-sm relative overflow-hidden"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>

              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 bg-foreground hover:bg-primary hover:text-primary-foreground text-background text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md"
                >
                  Pitch a Story <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-border bg-card text-foreground transition-colors"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-foreground hover:text-primary transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 mx-auto inline-flex items-center gap-2 bg-foreground text-background font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl"
              >
                Pitch a Story <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
