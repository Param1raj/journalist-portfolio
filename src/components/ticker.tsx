"use client"

export default function Ticker() {
  const brands = [
    "ABP NEWS",
    "IIMC NEW DELHI",
    "ZEE NEWS",
    "AMAR UJALA",
    "PARLIAMENT OF INDIA",
    "BHARAT 24",
    "NEWS 24 MAHAUL",
  ]

  // Duplicate the array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <section className="relative py-8 bg-muted/30 border-y border-border overflow-hidden flex items-center select-none">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
        {duplicatedBrands.map((brand, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-muted-foreground/60 whitespace-nowrap">
              {brand}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </div>
        ))}
      </div>
    </section>
  )
}
