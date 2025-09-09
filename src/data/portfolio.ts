// Portfolio data - easily editable for content management
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectWeather from '@/assets/project-weather.jpg';
import developerPortrait from '@/assets/my-portrait.png';

export const personalInfo = {
  name: "Byron Young",
  title: "Software Developer",
  tagline: "Building exceptional digital experiences with modern web technologies",
  email: "youngbk0308@gmail.com",
  location: "South Africa, Cape Town, ZA",
  yearsOfExperience: 2,
  bio: "“I’m a software developer who enjoys building user-friendly websites and applications. With hands-on experience in HTML, React, Tailwind CSS and TypeScript, I focus on creating clean, functional, and modern solutions. I’m passionate about learning new technologies and continuously improving my skills to deliver high-quality work.",
  portrait: developerPortrait,
  socialLinks: {
    github: "https://github.com/devByByron",
    linkedin: "http://www.linkedin.com/in/byron-young94", 
    email: "mailto:youngbk0308@gmail.com"
  }
};

export const skills = [
  // Frontend
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 4, category: "Frontend" as const },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 3, category: "Frontend" as const },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 4, category: "Frontend" as const },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 3, category: "Frontend" as const },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 3, category: "Frontend" as const },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 3, category: "Backend" as const },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 3, category: "Backend" as const },

  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 4, category: "Tools" as const },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 5, category: "Tools" as const },
  { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", level: 5, category: "Tools" as const },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 5, category: "Tools" as const },


  // Database
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/sqlserver-original.svg", level: 4, category: "Database" as const },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 3, category: "Database" as const },

  //Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 3, category: "Design" as const }
];

export const experience = [
  {
    role: "Digital Associate",
    company: "Capaciti",
    duration: "Jul 2025 – Present",
    location: "Salt River, WC",
    description: "Contributing to the development of responsive and functional web applications while collaborating with design and product teams.",
    achievements: [
      "Wrote and debugged code in Python, JavaScript, and HTML/CSS",
      "Built and deployed responsive web apps to hosting platforms",
      "Tested and troubleshot application bugs to ensure stability",
      "Used Git and GitHub for version control",
      "Participated in agile/scrum sessions and code reviews"
    ]
  },
  {
    role: "Work Integrated Learning Student",
    company: "Cape Peninsula University of Technology",
    duration: "Jul 2023 – Dec 2023",
    location: "Bellville, WC",
    description: "Worked on building a prototype web application and enhancing collaboration practices through version control.",
    achievements: [
      "Developed a prototype Virtual Machine request web application using Joomla frontend",
      "Collaborated with team members using GitHub to improve workflow and project organization"
    ]
  },
  {
    role: "Intern Developer",
    company: "University of Western Cape",
    duration: "May 2018 – May 2019",
    location: "Bellville, WC",
    description: "Assisted in application development and data integration processes using Microsoft technologies.",
    achievements: [
      "Designed and implemented ETL processes with SQL Server Integration Services (SSIS)",
      "Focused on data extraction, transformation, and loading (ETL) operations",
      "Contributed to documentation and quality assurance"
    ]
  },
  {
    role: "Intern Web Developer",
    company: "Web 2 Web",
    duration: "May 2017 – Nov 2017",
    location: "Century City, WC",
    description: "Supported development of client websites and optimized user experiences.",
    achievements: [
      "Developed responsive websites tailored to client requirements",
      "Managed and updated website content for consistency and freshness",
      "Applied SEO best practices to improve visibility and search rankings"
    ]
  }
];


export const education = [
  {
    degree: "DPICTADIP: ICT in Applications Development",
    institution: "Cape Peninsula University of Technology",
    year: "2023",
    details: "Completed a diploma focused on applications development, where I built a solid foundation in programming, databases, and web technologies. I worked on hands-on projects that involved creating responsive applications, collaborating with teams using GitHub, and applying software engineering principles to real-world challenges."
  },
  {
    degree: "AI For Everyone by DeepLearning.AI",
    institution: "DeepLearning.AI",
    year: "2025",
    details: "An introductory course on AI concepts, applications, and societal impact. Focused on understanding how AI is used in business, key opportunities and limitations, and how to work effectively with AI teams.",
    link: "https://www.coursera.org/account/accomplishments/verify/X4T1C5BLDE03"
  },
  {
    degree: "Introduction to Artificial Intelligence (AI)",
    institution: "IBM",
    year: "2025",
    details: "Learned the fundamentals of AI, including its history, applications, key concepts, and real-world use cases across industries.",
    link: "https://www.coursera.org/account/accomplishments/verify/2P3S3FTSZDFO"
  },
  {
    degree: "AI Essentials",
    institution: "Intel",
    year: "2025",
    details: "Gained foundational knowledge of AI concepts, tools, and applications, with a focus on how AI is shaping industries and everyday life.",
    link: "https://www.coursera.org/account/accomplishments/verify/66MKQKN8NW1Y"
  },
  {
    degree: "Generative AI with Large Language Models",
    institution: "AWS | Deep Learning.AI",
    year: "2025",
    details: "Gained foundational knowledge of AI concepts, tools, and applications, with a focus on how AI is shaping industries and everyday life.",
    link: "https://www.coursera.org/account/accomplishments/verify/6JSY1CC13SPP"
  },
  {
    degree: "AI Foundations: Prompt Engineering with ChatGPT",
    institution: "Arizona State University",
    year: "2025",
    details: "Learned the principles of prompt engineering to effectively interact with large language models like ChatGPT, focusing on crafting clear instructions and practical AI-driven solutions.",
    link: "https://www.coursera.org/account/accomplishments/verify/7EBXSIZOVNDO"
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
