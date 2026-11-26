// ─────────────────────────────────────────────────────────────
//  ALL WEBSITE CONTENT LIVES IN THIS ONE FILE.
//  Change the text between the quotes, save, and upload.
//  Both pages (home and profile) read from here.
//  Step-by-step help: see HOW-TO-UPDATE.md
// ─────────────────────────────────────────────────────────────
window.PROFILE = {
  lastUpdated: "26 Nov 2026",

  // ── Basics ──────────────────────────────────────────────────
  name: "Umang Mehta",
  title: "Chartered Accountant · Partner, BRS & Associates",
  headline: "CA | Partner at BRS & Associates | Finance Leader in the Making",
  location: "Jamnagar, Gujarat, India",
  email: "umang.mehta@mail.ca.in",
  photo: "img/headshot.webp",
  aboutPhoto: "img/formal.jpg",

  // A one-line belief, shown large on the home page
  quote: "Finance should help people decide, not just comply.",

  intro: "Partner at BRS & Associates, working in audit, financial governance, risk management and business advisory, helping organisations build stronger financial foundations.",

  // ── A note from me (home page, first person) ────────────────
  note: [
    "I walked into BRS & Associates in 2015 as an article assistant. Through articleship, audit assistant and audit manager years, I grew with the firm, and today I am a Partner there. Few people get to grow up professionally in one place, and I am grateful for it.",
    "Most of my work is audit, internal controls and advisory for businesses across manufacturing, logistics, petroleum transportation, healthcare, trading and the non-profit sector. What I enjoy most is the moment a number stops being a compliance figure and starts helping someone make a better decision.",
    "Outside the office I am usually on a football pitch, at the gym, or figuring out how Excel, VBA and AI can take the drudgery out of a CA's day. I share what I learn freely, through sessions for fellow CAs and a few small tools.",
    "I am now studying law alongside practice, because good advice sits where finance and law meet."
  ],
  signature: "Umang",

  // Profile-page summary (third person reads more formal on a CV)
  summary: "Chartered Accountant and Partner at BRS & Associates, Jamnagar, working in statutory, internal and tax audit, internal financial controls, risk management and business advisory. Has led engagements across manufacturing, jewellery, logistics, petroleum transportation, healthcare, trading and non-profit organisations, supervising audit teams from planning through review. Regular speaker and faculty at ICAI programmes on Excel, automation and AI in practice, and currently pursuing an LL.B.",

  // ── What I'm doing now ──────────────────────────────────────
  now: [
    { title: "Partner at BRS & Associates", text: "Leading audit, internal controls and advisory engagements for businesses across industries." },
    { title: "Studying law", text: "Pursuing an LL.B. at Saurashtra University, Rajkot (2026–2028)." },
    { title: "Teaching Excel automation", text: "Taught Excel automation with VBA and Power Query at Techsmart 2026: Data, Automation & AI, Jamnagar Branch of WIRC of ICAI." },
    { title: "Building on the side", text: "Small, free, offline tools for CAs, shared under @mehtaknowstech." }
  ],

  // ── Journey highlights (home page). Newest first ────────────
  milestones: [
    { year: "2026", text: "Became Partner at BRS & Associates, received my CA membership at the ICAI Convocation, and started an LL.B." },
    { year: "2026", text: "Conducted the Excelenation Workshop at the Jamnagar Branch of WIRC of ICAI, taught at Techsmart 2026, and began sharing free, offline tools for CAs." },
    { year: "2019", text: "Became Audit Manager, leading statutory, internal and tax audits." },
    { year: "2018", text: "Completed articleship and B.Com, and worked briefly with Sonecha & Amlani." },
    { year: "2015", text: "Joined BRS & Associates as an article assistant." }
  ],

  topSkills: ["Statutory & Tax Audit", "Internal Financial Controls", "Risk Management", "Strategic Financial Management", "Working Capital Management", "GRC", "Excel, VBA & Automation", "AI in Practice"],
  interests: ["Football", "Fitness", "Technology & AI", "Continuous learning"],
  languages: ["English", "Hindi", "Gujarati"],
  memberships: [
    { title: "Member", org: "The Institute of Chartered Accountants of India (ICAI)" }
  ],

  // ── Experience (full detail on the profile page) ────────────
  experience: [
    { title: "Partner", org: "BRS & Associates, Chartered Accountants", place: "Jamnagar", dates: "Apr 2026 – Present", current: true, points: [
      "Leads statutory, internal and tax audit and advisory engagements."
    ]},
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

  // ── Speaking & teaching. Newest first. "img" is optional ────
  speaking: [
    { date: "Nov 2026", title: "Hero to Superhero: Excel automation with VBA & Power Query", org: "Techsmart 2026: Data, Automation & AI · Jamnagar Branch of WIRC of ICAI", img: "img/techsmart-2026.jpg" },
    { date: "May 2026", title: "Excelenation Workshop: Excel ODBC & Financial Statements", org: "Faculty · Jamnagar Branch of WIRC of ICAI", img: "img/icai-faculty.jpg" },
    { date: "2026", title: "Session for members", org: "Jamnagar Branch of WIRC of ICAI", img: "img/jamnagar-branch-talk.jpg" }
  ],

  // ── Photo gallery (home page) ───────────────────────────────
  gallery: [
    { src: "img/icai-convocation-2026.jpg", caption: "ICAI Convocation, Ahmedabad · May 2026" },
    { src: "img/icai-faculty.jpg", caption: "Excelenation Workshop, Jamnagar Branch of WIRC of ICAI · May 2026" },
    { src: "img/techsmart-2026.jpg", caption: "Techsmart 2026, Jamnagar Branch of WIRC of ICAI · Nov 2026" },
    { src: "img/jamnagar-branch-talk.jpg", caption: "Session at Jamnagar Branch of WIRC of ICAI" },
    { src: "img/casual.jpg", caption: "Off the clock" }
  ],

  // ── Writing (LinkedIn) ──────────────────────────────────────
  posts: [
    { tag: "Data privacy", title: "Is your CA firm ready for India's data privacy era?",
      summary: "What the DPDP Act, 2023 means for CA firms that handle PAN, Aadhaar, bank and payroll data, and the practical safeguards firms should put in place.",
      url: "https://www.linkedin.com/in/ca-umang-mehta/recent-activity/all/" },
    { tag: "AI in practice", title: "From writing assistant to building systems",
      summary: "Lessons from AICA Level 1 on using AI for tax research, audit, automation and turning ideas into working prototypes in hours.",
      url: "https://www.linkedin.com/in/ca-umang-mehta/recent-activity/all/" }
  ],

  // ── Tools: read live from the CA Toolkit README on GitHub ───
  // Add a tool there and it appears here by itself.
  toolkit: { repo: "imumehta/ca-toolkit", branch: "main", site: "https://imumehta.github.io/ca-toolkit/" },

  // ── Instagram: newest post first. Paste a new post's link at the top.
  // (If you ever set "feed" to a behold.so JSON link, posts update by themselves.)
  instagram: {
    handle: "mehtaknowstech", feed: "", count: 3,
    posts: [
      "https://www.instagram.com/p/DgMrZtyFoC5/",
      "https://www.instagram.com/reel/DgDBGLARWgC/",
      "https://www.instagram.com/reel/De_lmzcRPnu/"
    ]
  },

  channels: [
    { name: "Excelenation – by Umang Mehta", tagline: "Let's make Excel use smart. Practical Excel tips and shortcuts.",
      url: "https://whatsapp.com/channel/0029Vb82ujQ0lwgov8UKqF3l" },
    { name: "BRS CA 🤝 Citizen Forum", tagline: "Bridging Bharat's taxation and allied laws with its citizens: taxation, audit, finance, AI and automation, in clear, practical terms.",
      url: "https://whatsapp.com/channel/0029VbDFYqj1yT20qdK4bw1f" }
  ],

  socials: [
    { icon: "email",     label: "Email",     handle: "umang.mehta@mail.ca.in", url: "mailto:umang.mehta@mail.ca.in" },
    { icon: "linkedin",  label: "LinkedIn",  handle: "ca-umang-mehta", url: "https://www.linkedin.com/in/ca-umang-mehta" },
    { icon: "instagram", label: "Instagram", handle: "@mehtaknowstech", url: "https://www.instagram.com/mehtaknowstech/" },
    { icon: "instagram", label: "Instagram (personal)", handle: "@imumehta", url: "https://www.instagram.com/imumehta/" },
    { icon: "x",         label: "X",         handle: "@imumehta",      url: "https://x.com/imumehta" },
    { icon: "snapchat",  label: "Snapchat",  handle: "imumehta",       url: "https://www.snapchat.com/add/imumehta" },
    { icon: "github",    label: "GitHub",    handle: "imumehta",       url: "https://github.com/imumehta" },
    { icon: "tool",      label: "CA Toolkit", handle: "Free offline tools for CAs", url: "https://imumehta.github.io/ca-toolkit/" },
    { icon: "link",      label: "AllMyLinks", handle: "allmylinks.com/imumehta", url: "https://allmylinks.com/imumehta" }
  ]
};
