export const METADATA = {
  author: "Haridevi Muruganatham",
  title: "Portfolio | Haridevi",
  description:
    "Haridevi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://haridevi-portfolio.vercel.app/",
  keywords: [
    "Haridevi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: haridevimuruganantham@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/haridevi-muruganantham-003926285",
  },
  {
    name: "github",
    url: "https://github.com/HarideviMuruganantham",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/im_d.e.v.i/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Face recognition attendance system",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Face recognition attendance system using Tkinder + OpenCV 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/HarideviMuruganantham/Face-recognition-attendacne-system",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Intrust Labs AI Website",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Ai static website using HTML + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://haridevimuruganantham.github.io/Intrust-Labs-AI-website/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Cyber Security Website",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Cyber Security static website 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://haridevimuruganantham.github.io/Cyber-Security/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Data analyst portfolio",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Data analyst portfolio sample website 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://haridevi-portfolio.vercel.app/",
    tech: ["react"],
  },
];

export const WORK_CONTENTS = {
  DEVELOPER: [
    {
      title: "Intrust Innovation Labs",
      description:
        "•	Developing and maintaining responsive web applications using React.js, Tailwind CSS, and Chakra UI, following Atomic Design and component-based architecture.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
      title: "FastAPI",
      description:
        "•	Implemented secure backend services using FastAPI, integrating with OAuth2, OpenID Connect, and multi-factor authentication.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          API Engineer
        </div>
      ),
    },
    {
      title: "Database Management",
      description:
        "•	Designed and optimized relational databases with PostgreSQL and managed caching layers with Redis to improve application performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
  ],
  Analyst: [
    {
      title: "Cognifiz Technologies",
      description:
        "•	Data analyst at cognifiz technologies where I worked on a customer churn prediction project to identify at-risk customers and recommend retention strategies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing insights, one click at a time
        </div>
      ),
    },
    {
      title: "Web scraping",
      description:
        "•	Developed web scraping scripts using Python and BeautifulSoup to extract data from various websites, enabling data-driven decision-making.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web data analysis
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
