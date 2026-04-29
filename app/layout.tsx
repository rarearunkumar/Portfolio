import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arunkumar — Staff Product Designer",
  description:
    "Staff Product Designer in Bangalore. 12+ years designing B2B, B2C growth, and 0‑to‑1 products across SaaS, Ed‑tech, marketplace, and enterprise.",
  metadataBase: new URL("https://arunkumar.design"),
  openGraph: {
    title: "Arunkumar — Staff Product Designer",
    description:
      "12+ years designing B2B, B2C growth, and 0‑to‑1 products. Mentor at ADP List. Lead of IxDF Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunkumar — Staff Product Designer",
    description:
      "12+ years designing B2B, B2C growth, and 0‑to‑1 products.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const themeBootstrap = `
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = stored === 'dark' || (!stored && prefersDark);
    if (useDark) document.documentElement.classList.add('dark');
  } catch (_) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
