import Header from "@/components/header";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import BentoGrid from "@/components/bento-grid";
import Biography from "@/components/biography";
import Services from "@/components/services";
import BTSGallery from "@/components/bts-gallery";
import ContactTerminal from "@/components/contact-terminal";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Graphic Lines & Accents */}
      <div className="absolute inset-0 bg-news-grid pointer-events-none -z-10" />

      {/* Floating Header */}
      <Header />

      {/* Hero Header */}
      <Hero />

      {/* Newsroom Ticker */}
      <Ticker />

      {/* Bento Portfolio Grid */}
      <BentoGrid />

      {/* Bio & Credentials Narrative */}
      <Biography />

      {/* Services Grid */}
      <Services />

      {/* Visits & Gallery BTS */}
      <BTSGallery />

      {/* Contact CLI Terminal Form */}
      <ContactTerminal />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
