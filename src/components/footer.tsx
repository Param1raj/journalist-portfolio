"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-card text-muted-foreground text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 font-serif text-foreground font-bold">
          <span>प्रशांत पाल</span>
          <span className="text-[10px] font-sans font-normal text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>


        {/* Back to top */}
        <button
          onClick={handleScrollTop}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors py-1.5 font-mono text-[10px] uppercase tracking-wider"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5 text-primary" />
        </button>
      </div>
    </footer>
  )
}
