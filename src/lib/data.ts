import GitHubIcon from "@/assets/github-logo.svg";
import LinkedInIcon from "@/assets/linkedin-logo.svg";

export const navItems = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "technologies",
    href: "#technologies",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

export const socialIcons = [
  {
    icon: GitHubIcon,
    tooltip: "Github",
    label: "Link to Github profile",
    link: "https://github.com/siobaldev",
  },
  {
    icon: LinkedInIcon,
    tooltip: "Linkedin",
    label: "Link to Linkedin profile",
    link: "https://www.linkedin.com/in/minard-siobal-dev",
  },
];

export const projectItems = [
  {
    title: "Job Log",
    icon: "/assets/job-log-logo.svg",
    iconAlt: "job-log-logo",
    image: "/assets/job-log-image.webp",
    imageAlt: "Job Log Project Preview Image",
    description:
      "A job application tracker that turns pasted job postings into structured records using an LLM. I built the extraction and validation pipeline, AI-generated application emails and cover letters in selectable tones, and a searchable, filterable job list with pagination stored in the URL. Supabase handles auth and row-level security, with private anonymous sessions for visitors and Cloudflare Turnstile to block bots.",
    projectLink: "https://job-log-app.vercel.app/",
    githubLink: "https://github.com/siobaldev/job-log",
    tag: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zod",
      "Reka UI",
      "OpenRouter",
    ],
    bgImageColor: "light",
  },
  {
    title: "Estatein",
    icon: "/assets/estatein-logo.svg",
    iconAlt: "estatein-logo",
    image: "/assets/estatein-image.webp",
    imageAlt: "Estatein Project Preview Image",
    description:
      "A real estate listings site I adapted from an existing design into a fully working product, matching it to the Estatein brand. I built out property browsing, filterable listings, individual listing pages, testimonials, and a working login and registration flow, backed by Supabase for data and image storage.",
    projectLink: "https://estatein-hub.vercel.app/",
    githubLink: "https://github.com/siobaldev/estatein",
    tag: ["Next.js", "TypeScript", "Tailwindcss", "Motion", "Zod", "Supabase"],
    bgImageColor: "dark",
  },
  {
    title: "Spiky Sprouts",
    icon: "/assets/spiky-sprouts-logo.svg",
    iconAlt: "spiky-sprouts-logo",
    image: "/assets/spiky-sprouts-image.webp",
    imageAlt: "Spiky Sprouts Project Preview Image",
    description:
      "A cactus and succulent storefront I designed from scratch in Figma and built to practice a full e-commerce flow, from design through cart and product logic. It includes category browsing, a cart, and product data pulled from Supabase through Prisma.",
    projectLink: "https://spiky-sprouts.vercel.app/",
    githubLink: "https://github.com/siobaldev/spiky-sprouts-app",
    tag: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwindcss",
      "Supabase",
      "Prisma",
      "Tanstack Query",
      "Motion",
      "Zod",
    ],
    bgImageColor: "dark",
  },
  {
    title: "Vision Twenty",
    icon: "/assets/vision-twenty-logo.svg",
    iconAlt: "vision-twenty-logo",
    image: "/assets/vision-twenty-image.webp",
    imageAlt: "Vision Twenty Project Preview Image",
    description:
      "A small timer app for the 20-20-20 rule, designed from scratch in Figma. I built it to get comfortable with global state management and accessible UI components. Zustand runs the timer logic, and shadcn/ui powers the accessible controls.",
    projectLink: "https://vision-twenty.vercel.app/",
    githubLink: "https://github.com/siobaldev/vision-twenty",
    tag: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwindcss",
      "shadcn/ui",
      "Zustand",
    ],
    bgImageColor: "dark",
  },
];

export const mainTechItems = [
  {
    title: "Nuxt 4",
    icon: "/assets/technologies/nuxt.svg",
    alt: "nuxt-logo",
    description: "Vue Meta-Framework",
    bgColor: "#00DC82",
  },
  {
    title: "Vue 3",
    icon: "/assets/technologies/vue.svg",
    alt: "vue-logo",
    description: "JavaScript Framework",
    bgColor: "#41B883",
  },
  {
    title: "Next.js",
    icon: "/assets/technologies/nextjs.svg",
    alt: "next.js-logo",
    description: "React Framework",
    bgColor: "#FEFEFE",
  },
  {
    title: "JavaScript",
    icon: "/assets/technologies/javascript.svg",
    alt: "javascript-logo",
    description: "Scripting Language",
    bgColor: "#F0DB4F",
  },
  {
    title: "TypeScript",
    icon: "/assets/technologies/typescript.svg",
    alt: "typescript-logo",
    description: "Type Safety",
    bgColor: "#3178C6",
  },
  {
    title: "Tailwindcss",
    icon: "/assets/technologies/tailwindcss.svg",
    alt: "tailwindcss-logo",
    description: "CSS Framework",
    bgColor: "#2298BD",
  },
  {
    title: "React",
    icon: "/assets/technologies/react.svg",
    alt: "react-logo",
    description: "JavaScript Library",
    bgColor: "#00D8FF",
  },

  {
    title: "Supabase",
    icon: "/assets/technologies/supabase.svg",
    alt: "supabase-logo",
    description: "Database",
    bgColor: "#3ECF8E",
  },
  {
    title: "Prisma",
    icon: "/assets/technologies/prisma.svg",
    alt: "Prisma-logo",
    description: "ORM",
    bgColor: "#FFFFFF",
  },
  {
    title: "React Query",
    icon: "/assets/technologies/reactquery.svg",
    alt: "react-query-logo",
    description: "Data Fetching",
    bgColor: "#FF4154",
  },
  {
    title: "Git",
    icon: "/assets/technologies/git.svg",
    alt: "git-logo",
    description: "Version Control",
    bgColor: "#DE4C36",
  },
  {
    title: "Motion",
    icon: "/assets/technologies/motion.svg",
    alt: "motion-logo",
    description: "Animation Library",
    bgColor: "#FFF312",
  },
  {
    title: "Figma",
    icon: "/assets/technologies/figma.svg",
    alt: "figma-logo",
    description: "Design Tool",
    bgColor: "#A259FF",
  },
];

export const allTechItems = [
  {
    title: "Next.js",
    icon: "/assets/technologies/nextjs.svg",
    alt: "next.js-logo",
  },
  {
    title: "JavaScript",
    icon: "/assets/technologies/javascript.svg",
    alt: "javascript-logo",
  },
  {
    title: "TypeScript",
    icon: "/assets/technologies/typescript.svg",
    alt: "typescript-logo",
  },
  {
    title: "Tailwindcss",
    icon: "/assets/technologies/tailwindcss.svg",
    alt: "tailwindcss-logo",
  },
  {
    title: "React",
    icon: "/assets/technologies/react.svg",
    alt: "react-logo",
  },
  {
    title: "Supabase",
    icon: "/assets/technologies/supabase.svg",
    alt: "supabase-logo",
  },
  {
    title: "Prisma",
    icon: "/assets/technologies/prisma.svg",
    alt: "Prisma-logo",
  },
  {
    title: "React Query",
    icon: "/assets/technologies/reactquery.svg",
    alt: "react-query-logo",
  },
  {
    title: "Git",
    icon: "/assets/technologies/git.svg",
    alt: "git-logo",
  },
  {
    title: "Figma",
    icon: "/assets/technologies/figma.svg",
    alt: "figma-logo",
  },
  {
    title: "Motion",
    icon: "/assets/technologies/motion.svg",
    alt: "motion-logo",
  },
  {
    title: "CSharp",
    icon: "/assets/technologies/csharp.svg",
    alt: "csharp-logo",
  },
  {
    title: "HTML",
    icon: "/assets/technologies/html5.svg",
    alt: "html-logo",
  },
  {
    title: "CSS",
    icon: "/assets/technologies/css.svg",
    alt: "css-logo",
  },
  {
    title: "Sass",
    icon: "/assets/technologies/sass.svg",
    alt: "sass-logo",
  },
  {
    title: "MySQL",
    icon: "/assets/technologies/mysql.svg",
    alt: "mysql-logo",
  },
  {
    title: "MS SQL",
    icon: "/assets/technologies/sql-server.svg",
    alt: "sql-server-logo",
  },
];
