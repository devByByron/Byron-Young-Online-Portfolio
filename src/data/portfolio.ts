// Portfolio data - easily editable for content management
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectWeather from '@/assets/project-weather.jpg';
import developerPortrait from '@/assets/developer-portrait.jpg';

export const personalInfo = {
  name: "Alex Developer",
  title: "Full-Stack Software Developer",
  tagline: "Building exceptional digital experiences with modern web technologies",
  email: "alex@developer.com",
  location: "San Francisco, CA",
  yearsOfExperience: 5,
  bio: "Passionate full-stack developer with 5+ years of experience creating scalable web applications. I specialize in React, TypeScript, and Node.js, with a keen eye for modern UI/UX design. I love turning complex problems into simple, beautiful solutions.",
  portrait: developerPortrait,
  socialLinks: {
    github: "https://github.com/alexdeveloper",
    linkedin: "https://linkedin.com/in/alexdeveloper",
    twitter: "https://twitter.com/alexdeveloper",
    email: "mailto:alex@developer.com"
  }
};

export const skills = [
  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 5, category: "Frontend" as const },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 5, category: "Frontend" as const },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 4, category: "Frontend" as const },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 5, category: "Frontend" as const },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 3, category: "Frontend" as const },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 5, category: "Frontend" as const },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 4, category: "Backend" as const },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 4, category: "Backend" as const },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 4, category: "Backend" as const },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 3, category: "Backend" as const },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 4, category: "Backend" as const },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: 3, category: "Backend" as const },
  
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 5, category: "Tools" as const },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 3, category: "Tools" as const },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 3, category: "Tools" as const },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 4, category: "Design" as const }
];

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    duration: "2022 - Present",
    description: "Lead development of scalable web applications using React, TypeScript, and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 4 developers on major product redesign",
      "Implemented automated testing reducing bugs by 60%"
    ]
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    duration: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design team to create intuitive user interfaces.",
    achievements: [
      "Built component library used across 5 products",
      "Optimized bundle size reducing load time by 50%",
      "Implemented accessibility standards achieving WCAG AA compliance"
    ]
  },
  {
    role: "Junior Developer",
    company: "WebSolutions Ltd.",
    duration: "2019 - 2020",
    description: "Gained experience in full-stack development while working on client projects and internal tools.",
    achievements: [
      "Contributed to 10+ client projects",
      "Learned modern web development practices",
      "Received 'Rising Star' award for quick learning"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2019",
    details: "Graduated Magna Cum Laude, focused on software engineering and web technologies"
  },
  {
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    year: "2023",
    details: "Professional certification in cloud architecture and deployment",
    link: "https://aws.amazon.com/certification/"
  },
  {
    degree: "Meta Frontend Developer Certificate",
    institution: "Meta (Facebook)",
    year: "2022",
    details: "Comprehensive program covering React, JavaScript, and modern frontend practices",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: projectEcommerce,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com/alexdeveloper/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    title: "Project Management Dashboard",
    description: "Intuitive project management tool with kanban boards, time tracking, and team collaboration features. Designed for remote teams.",
    image: projectDashboard,
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth"],
    githubUrl: "https://github.com/alexdeveloper/project-dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
    featured: false
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, location-based weather, and interactive maps. Progressive Web App with offline support.",
    image: projectWeather,
    technologies: ["Vue.js", "PWA", "Chart.js", "OpenWeather API", "Workbox"],
    githubUrl: "https://github.com/alexdeveloper/weather-app",
    liveUrl: "https://weather-demo.netlify.app",
    featured: false
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Alex is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and ability to understand complex requirements make him invaluable to any team.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c28ca3d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    role: "CEO at StartupXYZ",
    content: "Working with Alex was a game-changer for our startup. He not only built our platform but also provided valuable insights on user experience and scalability.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];