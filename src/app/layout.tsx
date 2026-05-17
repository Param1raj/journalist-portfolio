import type { Metadata } from "next";
import { Inter, Lora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prashantpal9.wordpress.com"),
  title: "Prashant Pal | Bilingual Multimedia Journalist, IIMC Delhi Alumnus & Page Layout Editor",
  description: "Professional journalism portfolio of Prashant Pal, graduate of Indian Institute of Mass Communication (IIMC) New Delhi & former ABP News Intern. Specialized in ground socio-political beats, Adobe InDesign page layout, and verified editorial fact-checking.",
  keywords: [
    "Prashant Pal",
    "Prashant Pal Journalist",
    "Hindi Journalism Portfolio",
    "IIMC Hindi Journalism 2026 Alumnus",
    "ABP News Intern Desk Delhi",
    "Ground Reporter Delhi Noida",
    "Adobe InDesign Newspaper Layout Editor",
    "Hindi Fact Checking Expert",
    "Multimedia News Packages",
    "Bilingual Journalist Delhi",
    "New Delhi Ground Reporter"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Prashant Pal | Bilingual Multimedia Journalist & Page Editor",
    description: "Discover the ground-level reporting and premium page editorial designs of IIMC alumnus Prashant Pal. Fusing facts, voice, and visual storytelling.",
    type: "website",
    url: "https://prashantpal9.wordpress.com/",
    siteName: "Prashant Pal Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/images/prashant_profile.png",
        width: 1200,
        height: 1600,
        alt: "Prashant Pal - Bilingual Multimedia Journalist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Pal | Bilingual Multimedia Journalist & Page Editor",
    description: "Discover the ground-level reporting and premium page editorial designs of IIMC alumnus Prashant Pal. Fusing facts, voice, and visual storytelling.",
    images: ["/images/prashant_profile.png"],
    creator: "@prashant_pal",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://prashantpal9.wordpress.com/#person",
      "name": "Prashant Pal",
      "jobTitle": "Bilingual Multimedia Journalist & Editorial Page Designer",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Mass Communication (IIMC), New Delhi",
        "url": "https://iimc.nic.in/"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "ABP News Network",
        "logo": "https://news.abplive.com/assets/images/logo.png"
      },
      "knowsAbout": [
        "Hindi Journalism",
        "Ground Reporting",
        "Adobe InDesign Page Layouts",
        "Video Editing & Mobile Journalism",
        "Fact-Checking & Source Verification"
      ],
      "url": "https://prashantpal9.wordpress.com/",
      "image": "https://prashantpal9.wordpress.com/images/prashant_profile.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com/in/prashant-pal-58487b282",
        "https://prashantpal.stck.me/",
        "mailto:prashantpal9@wordpress.com"
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://prashantpal9.wordpress.com/#budgetjournal",
      "name": "IIMC Budget 2025-26 Lab Journal (9th Edition)",
      "creator": {
        "@id": "https://prashantpal9.wordpress.com/#person"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Indian Institute of Mass Communication"
      },
      "url": "https://drive.google.com/drive/folders/1BGXdsNLk4XAwHxiA8Y7JuykfTcRJp8xl"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={cn(
          "scroll-smooth",
          sans.variable,
          serif.variable,
          mono.variable
        )}
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } catch (e) {}
                })();
              `,
            }}
          />
        </head>
        <body className="antialiased font-sans">
          <LenisProvider>
            {children}
          </LenisProvider>
        </body>
      </html>
    );
}
