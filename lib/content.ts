export const profile = {
  name: "Arunkumar",
  role: "Staff Product Designer",
  location: "Bangalore, India",
  tagline:
    "Designing B2B, B2C, and 0‑1 products for the past 12+ years — with the last four spent leading teams.",
  bio: "12+ years of experience in designing both B2B, B2C growth and 0 to 1 products for various industries such as SaaS, Ed-tech, Hyperlocal marketplace, and enterprises. 4+ years of leadership experience in building high performing multi-disciplinary design teams for both startups and large organisations. Mentoring early-mid career designers via ADP List, also built and leading IxDF Bengaluru community chapter.",
  stats: [
    { value: "12+", label: "years designing products" },
    { value: "4+", label: "years leading design teams" },
    { value: "4", label: "industries shipped in" },
  ],
  industries: ["SaaS", "Ed‑tech", "Hyperlocal marketplace", "Enterprise"],
  links: {
    linkedin: "https://www.linkedin.com/in/rarearun/",
    resume:
      "https://drive.google.com/file/d/10N0X7fQd_vvsOlTVwezWzUbTb-U2IwVU/view?usp=drive_link",
    portfolio: "https://www.figma.com/deck/nghKRDiDGkrQOSiRkV8pS5",
    email: "mailto:hello@arunkumar.design",
  },
  caseStudies: [
    {
      n: "01",
      title: "Application flow revamp",
      teaser:
        "Rebuilt a critical end‑to‑end application journey — untangling a multi‑step flow into a focused, testable experience.",
      href: "https://www.figma.com/deck/Osapj2CrghH3cTyk3fN18I/Casestudy-1---Application-flow-revamp?node-id=0-1&t=Shi2HRdtYQRUijVE-1",
    },
    {
      n: "02",
      title: "Learn OS",
      teaser:
        "Designing a learning operating system from 0‑1 — framing the product, the surface, and the rituals around it.",
      href: "https://www.figma.com/deck/ErMw5Pf8GELrvStCSeRGeI/Case-study-2---Learn-OS?node-id=0-1&t=nBX44XSCFjXWyXJ0-1",
    },
  ],
  community: [
    {
      title: "ADP List",
      role: "Mentor",
      blurb:
        "Mentoring early‑ and mid‑career designers on craft, career growth, and the messy middle of building products.",
    },
    {
      title: "IxDF Bengaluru",
      role: "Founder & Chapter Lead",
      blurb:
        "Built and lead the Bengaluru chapter of the Interaction Design Foundation — a local community for designers in the city.",
    },
  ],
} as const;

export type Profile = typeof profile;
