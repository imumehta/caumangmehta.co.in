// ─────────────────────────────────────────────────────────────
//  All website content lives here. Edit this file (or ask Claude
//  to "sync my website with LinkedIn") and the page updates.
//  Layout and styling live in index.html and never need touching.
// ─────────────────────────────────────────────────────────────
window.PROFILE = {
  lastSynced: "14 Oct 2026",

  name: "Umang Mehta",
  headline: "CA | Partner at BRS & Associates | Finance Leader in the Making",
  location: "Jamnagar, Gujarat, India",
  photo: "img/headshot.webp",
  aboutPhoto: "img/formal.jpg",

  intro: "Partner at BRS & Associates. Nearly a decade in audit, financial governance, risk management and business advisory, helping organisations build stronger financial foundations.",

  about: [
    "My journey with BRS & Associates has come full circle, from Article Assistant to Audit Manager and now Partner. Along the way I have worked across manufacturing, logistics, petroleum transportation, healthcare, trading and non-profit sectors, working closely with businesses to strengthen controls, improve reporting quality and enhance operational efficiency.",
    "I believe finance professionals create the most value when they move beyond compliance and contribute to better decision-making, stronger governance and sustainable growth.",
    "Outside work, I have a keen interest in technology, football, fitness and continuous learning. The discipline and resilience developed through sports continue to shape my professional approach today.",
    "Currently focused on expanding my expertise in business finance, strategic advisory, performance management and leadership."
  ],

  stats: [
    { value: "10+", label: "Years in practice" },
    { value: "6+",  label: "Years as Audit Manager" },
    { value: "6",   label: "Industries served" },
    { value: "CA",  label: "Member, ICAI" }
  ],

  topSkills: ["Strategic Financial Management", "Internal Financial Controls", "Risk Management", "Working Capital Management", "GRC"],
  interests: ["Technology & AI", "Football", "Fitness", "Continuous learning"],

  experience: [
    { title: "Partner", org: "BRS & Associates", place: "Jamnagar", dates: "Apr 2026 – Present", current: true, points: [] },
    { title: "Audit Manager", org: "BRS & Associates", place: "Jamnagar", dates: "Dec 2019 – Apr 2026", points: [
      "Led statutory, internal and tax audit engagements across multiple industries.",
      "Supervised teams of article assistants and audit staff, from engagement planning through review.",
      "Coordinated directly with firm partners and senior client management.",
      "Conducted audits for jewellery manufacturing and adornment businesses.",
      "Evaluated internal control systems and operational processes.",
      "Ran large-scale physical verification assignments."
    ]},
    { title: "Audit Assistant", org: "BRS & Associates", place: "Jamnagar", dates: "Dec 2018 – Dec 2019", points: [] },
    { title: "Audit Assistant", org: "Sonecha & Amlani", place: "Jamnagar", dates: "Jun 2018 – Sep 2018", points: [] },
    { title: "Article Assistant", org: "BRS & Associates", place: "Jamnagar", dates: "May 2015 – May 2018", points: [
      "Completed articleship with extensive exposure to financial audits, taxation assignments and advisory engagements."
    ]}
  ],

  education: [
    { title: "Chartered Accountant (CA)", org: "The Institute of Chartered Accountants of India", dates: "2014 – 2026" },
    { title: "Bachelor of Laws (LL.B.)", org: "Saurashtra University, Rajkot · Pursuing", dates: "2026 – 2028" },
    { title: "Bachelor of Commerce (B.Com)", org: "Indira Gandhi National Open University", dates: "2015 – 2018" },
    { title: "Schooling", org: "Air Force School", dates: "2003 – 2014" }
  ],

  certifications: [
    { title: "AI for CA (AICA) – Level 1", org: "ICAI", dates: "Jun 2026" },
    { title: "Microsoft Excel Certification", org: "Microsoft", dates: "Jul 2026" },
    { title: "Generative AI Mastermind", org: "Outskill", dates: "Jun 2026" },
    { title: "AI Tools Workshop", org: "Be10x", dates: "Jun 2026" },
    { title: "Introduction to Generative AI", org: "Google", dates: "Jun 2026" }
  ],

  gallery: [
    { src: "img/icai-convocation-2026.jpg", caption: "ICAI Convocation, Ahmedabad · May 2026" },
    { src: "img/icai-faculty.jpg", caption: "Faculty at an ICAI programme" },
    { src: "img/ca-students-conference-2019.jpg", caption: "Speaker, CA Students' Conference 2019" },
    { src: "img/jamnagar-branch-talk.jpg", caption: "Session at Jamnagar Branch of WIRC of ICAI" },
    { src: "img/casual.jpg", caption: "Off the clock" }
  ],

  posts: [
    { tag: "Data privacy", title: "Is your CA firm ready for India's data privacy era?",
      summary: "What the DPDP Act, 2023 means for CA firms that handle PAN, Aadhaar, bank and payroll data, and the practical safeguards firms should put in place.",
      url: "https://www.linkedin.com/in/ca-umang-mehta/recent-activity/all/" },
    { tag: "AI in practice", title: "From writing assistant to building systems",
      summary: "Lessons from AICA Level 1 on using AI for tax research, audit, automation and turning ideas into working prototypes in hours.",
      url: "https://www.linkedin.com/in/ca-umang-mehta/recent-activity/all/" }
  ],

  // Free tools hosted on the site. Put each tool's HTML file in the tools/ folder.
  // The Tools section stays hidden while this list is empty.
  tools: [
    { tag: "Income Tax", name: "IT Act Section Mapping 1961 ↔ 2025", file: "tools/it-act-mapping.html",
      description: "Look up how every section of the Income-tax Act, 1961 maps to the new Income-tax Act, 2025, and back." },
    { tag: "Income Tax", name: "Tax Audit Applicability", file: "tools/tax-audit-applicability.html",
      description: "Check whether a tax audit under section 44AB applies, based on turnover, receipts and presumptive scheme." },
    { tag: "TDS / TCS", name: "TDS / TCS Challan Generator", file: "tools/tds-challan-generator.html",
      description: "Prepare an ITNS 281 challan with section mapping across the 1961 and 2025 Acts, ready to print as PDF." },
    { tag: "GST", name: "GSTR-2A vs Books Reconciler", file: "tools/gstr2a-reconciler.html",
      description: "Match your purchase register against the GSTR-2A B2B download and see mismatches party-wise." },
    { tag: "Company Law", name: "Companies Act Applicability Analyser", file: "tools/companies-act-applicability.html",
      description: "See which Companies Act, 2013 provisions apply to a company based on its size, type and thresholds." },
    { tag: "Banking", name: "Bank Statement Converter", file: "tools/bank-statement-converter.html",
      description: "Convert bank statement PDFs from any Indian bank, native or scanned, into Excel or CSV." },
    { tag: "Productivity", name: "PDF Suite", file: "tools/pdf-suite.html",
      description: "Merge, split, compress, rotate and convert PDFs, entirely offline in your browser." }
  ],

  channels: [
    { name: "Excelenation – by Umang Mehta", tagline: "Let's make Excel use smart. Practical Excel tips and shortcuts.",
      url: "https://whatsapp.com/channel/0029Vb82ujQ0lwgov8UKqF3l" },
    { name: "BRS CA 🤝 Citizen Forum", tagline: "Bridging Bharat's taxation and allied laws with its citizens: taxation, audit, finance, AI and automation, in clear, practical terms.",
      url: "https://whatsapp.com/channel/0029VbDFYqj1yT20qdK4bw1f" }
  ],

  socials: [
    { icon: "email",     label: "Email",     handle: "umang.mehta@mail.ca.in", url: "mailto:umang.mehta@mail.ca.in" },
    { icon: "linkedin",  label: "LinkedIn",  handle: "ca-umang-mehta", url: "https://www.linkedin.com/in/ca-umang-mehta" },
    { icon: "instagram", label: "Instagram", handle: "@imumehta",      url: "https://www.instagram.com/imumehta/" },
    { icon: "x",         label: "X",         handle: "@imumehta",      url: "https://x.com/imumehta" },
    { icon: "github",    label: "GitHub",    handle: "imumehta",       url: "https://github.com/imumehta" }
  ]
};
