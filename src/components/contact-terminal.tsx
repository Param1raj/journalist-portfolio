"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, ArrowUpRight, Award } from "lucide-react"

export default function ContactTerminal() {
  const [form, setForm] = useState({ name: "", outlet: "", pitch: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.pitch) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="py-12 px-6 md:px-12 max-w-4xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16 border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 w-fit mb-3">
            <span className="text-[9px] font-mono tracking-widest text-primary uppercase">
              संपर्क | Pitch Room
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            असाइनमेंट डेस्क | Assignment Registry
          </h2>
        </div>
        <p className="mt-2 md:mt-0 text-xs text-muted-foreground max-w-xs leading-relaxed">
          Submit stories, design projects, or field coordination requests directly onto Prashant&apos;s active desk wire.
        </p>
      </div>

      {/* Luxury Press Wire Card */}
      <div className="rounded-3xl border border-border bg-card shadow-lg p-6 md:p-10 relative overflow-hidden">
        {/* Letterhead Accents */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-amber-500 to-primary/40" />
        
        {/* Registry Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-6 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/5 p-2.5 text-primary border border-primary/10">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-foreground">MEDIA INQUIRY RECORD</h3>
              <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">DOCKET: PP-NEWS-2026</p>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input: Name */}
            <div className="space-y-2">
              <label className="block text-xs font-mono tracking-wider text-foreground uppercase font-bold">
                Your Name / Designation <span className="text-primary/70">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Chief News Editor, Media Coordinator..."
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 md:h-14 bg-zinc-100/80 dark:bg-zinc-900/85 border border-zinc-300 dark:border-zinc-800 rounded-xl px-5 text-sm md:text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary/70 focus:ring-1 focus:ring-primary/40 transition-all font-sans leading-normal"
              />
            </div>

            {/* Input: Outlet */}
            <div className="space-y-2">
              <label className="block text-xs font-mono tracking-wider text-foreground uppercase font-bold">
                News Publication or Media House
              </label>
              <input
                type="text"
                placeholder="e.g. ABP News, Zee News, Amar Ujala, Digital Portal..."
                value={form.outlet}
                onChange={(e) => setForm({ ...form, outlet: e.target.value })}
                className="w-full h-12 md:h-14 bg-zinc-100/80 dark:bg-zinc-900/85 border border-zinc-300 dark:border-zinc-800 rounded-xl px-5 text-sm md:text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary/70 focus:ring-1 focus:ring-primary/40 transition-all font-sans leading-normal"
              />
            </div>

            {/* Input: Pitch */}
            <div className="space-y-2">
              <label className="block text-xs font-mono tracking-wider text-foreground uppercase font-bold">
                Tell me about your story idea or assignment <span className="text-primary/70">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your ground coverage beat, translation requirements, layout specifications or timeline..."
                value={form.pitch}
                onChange={(e) => setForm({ ...form, pitch: e.target.value })}
                className="w-full min-h-[140px] bg-zinc-100/80 dark:bg-zinc-900/85 border border-zinc-300 dark:border-zinc-800 rounded-xl px-5 py-4 text-sm md:text-base text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary/70 focus:ring-1 focus:ring-primary/40 transition-all font-sans resize-none leading-relaxed"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-md font-serif text-sm md:text-base mt-8"
            >
              {loading ? (
                <span>Transmitting Assignment...</span>
              ) : (
                <>
                  <span><span className="hidden sm:inline-block"> असाइनमेंट जमा करें |</span> Submit Assignment Wire</span>
                  <Send className="w-4 h-4 shrink-0" />
                </>
              )}
            </button>

          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-12 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-600 dark:text-emerald-400 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-foreground">
              ASSIGNMENT SUBMITTED SUCCESSFULLY
            </h3>
            <p className="text-xs text-muted-foreground max-w-md leading-relaxed font-sans">
              The details have been logged onto Prashant Pal&apos;s editorial registry. A response will be dispatched through formal channels shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ name: "", outlet: "", pitch: "" })
              }}
              className="mt-6 text-xs text-primary hover:underline font-mono uppercase font-bold tracking-wider"
            >
              Submit another wire
            </button>
          </motion.div>
        )}
      </div>

      {/* Alternative Social Channels */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-border pt-8 text-xs font-mono">
        <div className="text-muted-foreground text-center sm:text-left">
          <span className="font-bold">DIRECT CHANNEL: </span>
          <a href="mailto:prashantpal9@wordpress.com" className="text-foreground hover:underline">
            prashantpal9@wordpress.com
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/prashant-pal-58487b282"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-5 py-2.5 rounded-full border border-border transition-colors shadow-sm font-sans text-xs font-medium"
        >
          <svg
            className="w-3.5 h-3.5 text-primary shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span>Connect on LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
