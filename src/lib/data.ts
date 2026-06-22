// ===== TYPE DEFINITIONS =====

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  link: string;
  github?: string;
  category: "frontend" | "flutter" | "fullstack";
  techStack: string[];
  features?: string[];
  problem?: string;
  solution?: string;
  challenges?: string;
  results?: string;
  lessons?: string;
}

export interface Experience {
  id: number;
  category: "education" | "internship" | "organization" | "course" | "work";
  title: string;
  position: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string; // react-icons identifier
  category: "frontend" | "mobile" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ===== PERSONAL INFO =====

export const personalInfo = {
  name: "Shohibun Najam Ilma",
  firstName: "Shohibun",
  titles: ["Mobile Developer", "FrontEnd Developer"],
  email: "shohibunnajam@gmail.com",
  location: "Jember, Indonesia",
  university: "University of Jember",
  degree: "Bachelor of Informatics",
  bio: "A graduate of the Informatics Study Program, Faculty of Computer Science, University of Jember, with a GPA of 3.74. Experienced as a Front End Developer Intern at PT Central AI, involved in the development of the company's website using JavaScript and Python with frameworks such as React.js, Next.js, and Flask.",
  valueProposition:
    "I build modern web and mobile applications with clean design, excellent user experience, and scalable architecture.",
  profileImage: "/images/icon.jpg",
  logo: "/images/logo.jpg",
  cvUrl: "/Curriculum_Vitae_Shohibun_Najam_Ilma.pdf",
  portfolioUrl: "/Portfolio_Shohibun.pdf",
};

// ===== SOCIAL LINKS =====

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Shohibun",
    icon: "FiGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shohibun-najam-ilma-ab481b20b/",
    icon: "FiLinkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shohibun.najam/",
    icon: "FiInstagram",
  },
];

// ===== NAV ITEMS =====

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// ===== STATS =====

export const stats = [
  { label: "Projects", value: 8, suffix: "+" },
  { label: "Certificates", value: 10, suffix: "+" },
  { label: "Experience", value: 3, suffix: "+ yrs" },
  { label: "Technologies", value: 15, suffix: "+" },
];

// ===== EXPERIENCES =====

export const experiences: Experience[] = [
  {
    id: 1,
    category: "organization",
    title: "Member of Public Relations Division",
    position: "Division Member",
    organization: "HMIF - Faculty of Computer Science",
    location: "University of Jember",
    startDate: "2019",
    endDate: "2021",
    description:
      "Served as an active member of the Public Relations Division of the Informatics Student Association (HMIF). Responsible for supporting communication activities, managing information dissemination, and assisting in organizing student events and collaborations with external organizations.",
    achievements: [
      "Supported public relations campaigns",
      "Assisted event coordination and organization",
      "Managed communication with students and external partners",
    ],
  },

  {
    id: 2,
    category: "education",
    title: "S1 - Informatics",
    position: "Bachelor of Informatics",
    organization: "University of Jember",
    location: "Jember, Indonesia",
    startDate: "2019",
    endDate: "2023",
    description:
      "Actively participated in academic activities, student organizations, seminars, and workshops to enhance technical knowledge and professional networking. Also served as a Teaching Assistant for the Artificial Intelligence course, supporting students through mentoring, assignment evaluation, and practical sessions.",
    achievements: [
      "GPA: 3.74 (Cum Laude)",
      "Teaching Assistant for Artificial Intelligence course",
      "Active participation in student organizations and academic events",
    ],
  },

  {
    id: 3,
    category: "organization",
    title: "Head of Public Relations Division",
    position: "Division Head",
    organization: "HMIF - Faculty of Computer Science",
    location: "University of Jember",
    startDate: "2021",
    endDate: "2022",
    description:
      "Led the Public Relations Division of the Informatics Student Association (HMIF), overseeing communication strategies, event promotions, and collaboration initiatives with both internal and external stakeholders.",
    achievements: [
      "Led public relations and communication strategies",
      "Managed and coordinated division members",
      "Organized and promoted student activities and events",
    ],
  },

  {
    id: 4,
    category: "course",
    title: "Front End JavaScript Wave 2",
    position: "Student",
    organization: "Binar Academy",
    location: "Online",
    startDate: "2022",
    endDate: "2022",
    description:
      "Completed an intensive Front-End JavaScript program covering modern web development concepts, JavaScript fundamentals, React.js, and collaborative project development.",
    achievements: [
      "Mastered JavaScript fundamentals",
      "Built interactive web applications",
      "Collaborated on team-based projects",
    ],
  },

  {
    id: 5,
    category: "internship",
    title: "Front End Developer Intern",
    position: "Front End Developer",
    organization: "PT Central AI",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    description:
      "Contributed to the development of company products and websites using React.js, Next.js, Flask, and modern frontend technologies. Participated in building web applications, POS systems, and Progressive Web Applications (PWA).",
    achievements: [
      "Developed company website using React.js and Next.js",
      "Built POS system features for business operations",
      "Created and maintained Progressive Web Applications (PWA)",
    ],
  },

  {
    id: 6,
    category: "course",
    title: "Full Stack Web Developer",
    position: "Student",
    organization: "SIM-K HariSenin",
    location: "Online",
    startDate: "2023",
    endDate: "2024",
    description:
      "Completed a Full Stack Web Development bootcamp covering frontend and backend technologies, software development fundamentals, database management, and deployment practices.",
    achievements: [
      "Completed full-stack development curriculum",
      "Built capstone web development projects",
      "Learned frontend, backend, and database integration",
    ],
  },

  {
    id: 7,
    category: "work",
    title: "Full Stack Developer",
    position: "Full Stack Developer",
    organization: "PT. Senyum Media Utama",
    location: "Indonesia",
    startDate: "2026",
    endDate: "Present",
    description:
      "Working as a Full Stack Developer responsible for developing and maintaining Tokosenyum's digital ecosystem across web and mobile platforms. Involved in designing, implementing, and optimizing scalable features, integrating APIs, improving user experience, and ensuring seamless performance across applications.",
    achievements: [
      "Developed Flutter mobile applications for Tokosenyum",
  "Built responsive web interfaces using Next.js",
  "Integrated REST APIs and backend services",
  "Implemented state management and reusable UI components",
  "Collaborated with designers and backend engineers"
    ],
  },
];
// ===== PROJECTS =====

export const projects: Project[] = [
  {
    id: 1,
    slug: "binar-car-rental",
    title: "Binar Car Rental",
    description:
      "A website designed to simplify the process of car rental transactions online, allowing users to easily select, book, and rent cars according to their needs.",
    longDescription:
      "Binar Car Rental is a comprehensive car rental platform built as part of the Binar Academy bootcamp. The platform enables users to browse available cars, select rental dates, and complete bookings seamlessly. It features a responsive design that works across all devices.",
    image: "/images/Project.png",
    link: "https://binar-car.netlify.app/",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    features: [
      "Car catalog with filtering",
      "Date-based booking system",
      "Responsive design",
      "Interactive UI components",
    ],
    problem: "Traditional car rental processes are time-consuming and require physical visits to rental offices.",
    solution: "Built an intuitive web platform that allows users to browse, compare, and book cars entirely online.",
  },
  {
    id: 2,
    slug: "second-hand",
    title: "Second Hand",
    description:
      "A website aimed at facilitating the buying and selling of second-hand goods online, making it easier for users to find and sell preloved products safely.",
    image: "/images/Project_2.png",
    link: "#",
    category: "frontend",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    features: [
      "Product listing & search",
      "User authentication",
      "Transaction management",
      "Image upload & gallery",
    ],
    problem: "Buying and selling second-hand goods lacks a trustworthy, user-friendly online platform.",
    solution: "Created a secure marketplace with user verification, product management, and seamless transactions.",
  },
  {
    id: 3,
    slug: "central-ai",
    title: "Central AI",
    description:
      "A digital startup website providing AI-powered services for SMEs, companies, and organizations including chatbots, OCR, POS, and Notula.",
    image: "/images/Project_3.png",
    link: "https://centralai.my.id/",
    category: "frontend",
    techStack: ["React.js", "Next.js", "Flask", "Python", "Tailwind CSS"],
    features: [
      "AI-powered chatbot integration",
      "OCR document processing",
      "Company profile & services showcase",
      "Modern responsive design",
    ],
    problem: "SMEs and organizations need affordable AI-powered tools to improve operational efficiency.",
    solution: "Built a comprehensive platform showcasing AI products and enabling digital transformation for businesses.",
  },
  {
    id: 4,
    slug: "green-care-blitz",
    title: "Green Care Blitz",
    description:
      "A website template designed with a modern and responsive appearance, ready to use for creating professional websites.",
    image: "/images/Project_4.png",
    link: "https://green-care-blitz.netlify.app/",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Modern responsive layout",
      "Clean UI components",
      "Cross-browser compatibility",
      "Template-ready structure",
    ],
  },
  {
    id: 5,
    slug: "pos-central-ai",
    title: "POS | Central AI",
    description:
      "A website to help users record point of sale transactions comprehensively, provided for free without time limits.",
    image: "/images/Project_5.png",
    link: "#",
    category: "frontend",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
    features: [
      "Transaction recording",
      "Sales analytics",
      "Inventory management",
      "Free unlimited usage",
    ],
    problem: "Small business operators need an affordable and simple way to manage their sales transactions.",
    solution: "Developed a free-to-use POS system with comprehensive transaction recording and reporting features.",
  },
  {
    id: 6,
    slug: "pwa-central-ai",
    title: "PWA | Central AI",
    description:
      "The Progressive Web App version of Central AI, optimized for responsive and lightweight user experience on mobile devices.",
    image: "/images/Project_6.png",
    link: "#",
    category: "frontend",
    techStack: ["React.js", "PWA", "Tailwind CSS", "Service Workers"],
    features: [
      "Offline functionality",
      "Mobile-optimized design",
      "Fast loading times",
      "Installable on devices",
    ],
  },
  {
    id: 7,
    slug: "lms-yapendik",
    title: "LMS Yapendik",
    description:
      "A web-based Learning Management System supporting digital teaching and learning activities for schools under the Yapendik foundation.",
    image: "/images/Project_7.png",
    link: "#",
    category: "frontend",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
    features: [
      "Material delivery system",
      "Assignment submission",
      "Online testing platform",
      "Teacher-student communication",
    ],
    problem: "Schools need a structured digital platform for managing the learning process efficiently.",
    solution: "Built a comprehensive LMS enabling material delivery, assignment management, and online assessments.",
  },
  {
    id: 8,
    slug: "liosa-cosplay",
    title: "Liosa Cosplay",
    description:
      "A website containing information about cosplayers and the purchase of cosplay items, built as a bootcamp final project.",
    image: "/images/Project_8.png",
    link: "#",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Cosplayer profiles",
      "Item catalog & shop",
      "Responsive gallery",
      "Modern UI design",
    ],
  },
];

// ===== SKILLS =====

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: "SiHtml5", category: "frontend" },
  { name: "CSS", icon: "SiCss", category: "frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  { name: "Shadcn UI", icon: "SiShadcnui", category: "frontend" },
  // Mobile
  { name: "Flutter", icon: "SiFlutter", category: "mobile" },
  { name: "Dart", icon: "SiDart", category: "mobile" },
  // Tools
  { name: "Git", icon: "SiGit", category: "tools" },
  { name: "GitHub", icon: "SiGithub", category: "tools" },
  { name: "Figma", icon: "SiFigma", category: "tools" },
  { name: "Postman", icon: "SiPostman", category: "tools" },
  { name: "VS Code", icon: "VscVscode", category: "tools" },
];

// ===== CERTIFICATES =====

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Assistant Lecturer in Geographic Information Systems Laboratory",
    issuer: "University of Jember",
    year: "2020 - 2021",
    description: "Proof of experience as a teaching assistant in the Geographic Information System Laboratory.",
    image: "/images/certificate.jpg",
  },
  {
    id: 2,
    title: "Laboratory Assistant in Geographic Information System",
    issuer: "University of Jember",
    year: "2020 - 2021",
    description: "Proof of experience as an assistant in the Geographic Information System Laboratory.",
    image: "/images/certificate_2.jpg",
  },
  {
    id: 3,
    title: "Member of the Public Relations Division",
    issuer: "HMIF University of Jember",
    year: "2019 - 2020",
    description: "Proof of having served as a member of the public relations division.",
    image: "/images/certificate_3.jpg",
  },
  {
    id: 4,
    title: "Member of the Public Relations Division",
    issuer: "HMIF University of Jember",
    year: "2020 - 2021",
    description: "Proof of having served as a member of the public relations division.",
    image: "/images/certificate_4.jpg",
  },
  {
    id: 5,
    title: "Head of the Public Relations Division",
    issuer: "HMIF University of Jember",
    year: "2021 - 2022",
    description: "Evidence of having served as the head of the public relations division.",
    image: "/images/certificate_5.jpg",
  },
  {
    id: 6,
    title: "MSIB Participants Batch 3",
    issuer: "PT Central AI",
    year: "2022",
    description: "Proof of having completed the internship at PT. Central AI.",
    image: "/images/certificate_6.jpg",
  },
  {
    id: 7,
    title: "Front End JavaScript Wave 2",
    issuer: "Binar Academy",
    year: "2022",
    description: "Proof of having completed the JavaScript learning activities.",
    image: "/images/certificate_7.png",
  },
  {
    id: 8,
    title: "Full Stack Web Developer",
    issuer: "Binar Academy",
    year: "2023",
    description: "Proof of completion of Full Stack Web Developer learning activities.",
    image: "/images/certificate_8.jpg",
  },
  {
    id: 9,
    title: "Cum Laude",
    issuer: "University of Jember",
    year: "2023",
    description: "Evidence of a student with outstanding achievements with honors.",
    image: "/images/certificate_9.jpg",
  },
  {
    id: 10,
    title: "ICOMITEE 2021",
    issuer: "University of Jember",
    year: "2021",
    description: "Proof of participation in the ICOMITEE 2021 launching event.",
    image: "/images/certificate_10.png",
  },
  {
    id: 11,
    title: "TOEFL Preparation",
    issuer: "University of Jember",
    year: "2020",
    description: "Proof of having completed the preparation class for one month.",
    image: "/images/certificate_11.png",
  },
];
