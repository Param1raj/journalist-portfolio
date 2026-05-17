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
  title: "Prashant Pal | Multimedia Hindi Journalist, IIMC Alumnus & Editorial Designer",
  description: "Professional portfolio of Prashant Pal, Hindi Journalism graduate from IIMC New Delhi and former ABP News Editorial Intern. Specialized in field ground reporting, Adobe InDesign layout designs, and verified fact-checking.",
  keywords: [
    "Prashant Pal",
    "Hindi Journalism",
    "IIMC New Delhi",
    "ABP News Intern",
    "InDesign Designer",
    "Ground Reporting Delhi",
    "Fact Checking Hindi",
    "Video Package Editor",
    "Delhi Assembly Elections 2025"
  ],
  openGraph: {
    title: "Prashant Pal | Multimedia Hindi Journalist & Designer",
    description: "Discover the multimedia portfolio of IIMC alumnus Prashant Pal. Fusing ground video reports, print designs, and copy editing.",
    type: "website",
    url: "https://prashantpal9.wordpress.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://prashantpal9.wordpress.com/#person",
      "name": "Prashant Pal",
      "jobTitle": "Multimedia Hindi Journalist",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Mass Communication (IIMC), New Delhi"
      },
      "knowsAbout": ["Hindi Journalism", "Ground Reporting", "Adobe InDesign", "Video Editing", "Fact-Checking"],
      "url": "https://prashantpal9.wordpress.com/",
      "sameAs": [
        "https://www.linkedin.com/in/prashant-pal-58487b282",
        "https://prashantpal.stck.me/"
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
