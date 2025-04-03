import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Bhardwaj",
  initials: "AB",
  url: "https://www.linkedin.com/in/aditya-bharadwaj-9a8635258/",
  // location: "San Francisco, CA",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack developer. I love building things and helping people. Very active on Twitter.",
  summary:
    " Im a passionate Full-Stack Developer and a 3rd-year B.E. student with a strong foundation in web development, specializing in React, Node.js, and MongoDB. I enjoy building scalable applications and have worked on projects ranging from real-time chat apps to AI-powered tools and Web3 solutions. I thrive on solving complex problems and continuously learning new technologies.",
  avatarUrl: "/scr.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aadi11862003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-bharadwaj-9a8635258/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.linkedin.com/in/aditya-bharadwaj-9a8635258/",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },


  education: [
    
    {
      school: "Chitkara University ",
      href: "https://www.chitkara.edu.in/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/chitkara.png",
      start: "2022",
      end: "2026",
    },
    
  ],
  projects: [
    {
      title: "CodeX",
      dates: "dec 2024 - present",
      active: true,
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS called Codex, which provides code visualization to help users understand how code works. It also includes AI-powered assistance, similar to ChatGPT, to enhance the coding experience.",
      technologies: [
        "React.js",
        "Javacript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      image: "/screenshot1.png",
      
    },
    {
      title: "trendify",
      dates: "June 2023 - dec-2023",
      active: true,
      description:
       "Designed, developed, and launched a user-friendly trendify, offering a seamless e-commerce experience. Implemented secure payment gateways, an intuitive product browsing system, and personalized recommendations. Optimized performance for fast loading and mobile responsiveness. Ensured a smooth checkout process to enhance user satisfaction.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoSQL",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      
      image: "/screenshot2.png",
    },
    {
      title: "Tour",
     
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Our Tour  Website offers a seamless travel booking experience with an interactive dashboard, real-time updates, secure payments, and AI-powered travel suggestions. Users can explore destinations, book flights, hotels, and tours, and manage their itineraries effortlessly.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      
      image: "/s1.png",
     
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],

} as const;
