// ===== TYPE DEFINITIONS =====

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  features: string[];
}

export interface Experience {
  id: number;
  category: "job" | "internship" | "academic";
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: number;
  type: "degree" | "bootcamp";
  title: string;
  institution: string;
  period: string;
  location?: string;
  achievement?: string;
  description: string;
  highlights: string[];
}

export interface OrganizationItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ===== PERSONAL & BRANDING INFO =====

export const personalInfo = {
  name: "Shohibun Najam Ilma",
  headline: "Software Developer | Web • Mobile • Desktop",
  greeting: "Hi, I'm",
  valueProposition: "Building interfaces. Creating experiences. Bringing ideas to life.",
  supportingParagraph:
    "Software Developer experienced in building web platforms, cross-platform mobile applications, and desktop solutions, with a strong focus on frontend engineering, reusable interfaces, responsive design, and API integration.",
  email: "shohibunnajam@gmail.com",
  location: "Jember, Jawa Timur, Indonesia",
  profileImage: "/images/icon.jpg",
  logo: "/images/logo-icon.png",
  cvUrl: "/Curriculum_Vitae_Shohibun_Najam_Ilma.pdf",
};

// ===== NAVIGATION =====

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// ===== SOCIAL LINKS =====

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shohibun",
    icon: "FiGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shohibun-najam-ilma-ab481b20b/",
    icon: "FiLinkedin",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/shohibunnajam",
    icon: "FiGitlab",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shohibun.najam/",
    icon: "FiInstagram",
  },
];

// ===== TECHNICAL SKILLS (5 CATEGORIES) =====

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "frontend",
    name: "Frontend & Web",
    description: "Core web standards and modern component frameworks.",
    skills: [
      { name: "React", icon: "SiReact", highlight: true },
      { name: "Next.js", icon: "SiNextdotjs", highlight: true },
      { name: "TypeScript", icon: "SiTypescript", highlight: true },
      { name: "JavaScript", icon: "SiJavascript", highlight: true },
      { name: "Vue.js", icon: "SiVuedotjs" },
      { name: "Svelte", icon: "SiSvelte" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
    ],
  },
  {
    id: "ui",
    name: "UI & Styling",
    description: "Design systems, layout utility engines, and animations.",
    skills: [
      { name: "Tailwind CSS", icon: "SiTailwindcss", highlight: true },
      { name: "shadcn/ui", icon: "SiShadcnui", highlight: true },
      { name: "Framer Motion", icon: "SiFramer", highlight: true },
      { name: "GSAP", icon: "SiGreensock" },
      { name: "CSS Modules", icon: "SiCssmodules" },
      { name: "Responsive Design", icon: "FiLayout", highlight: true },
    ],
  },
  {
    id: "mobile-desktop",
    name: "Mobile & Desktop",
    description: "Multiplatform application runtimes and native integrations.",
    skills: [
      { name: "Flutter", icon: "SiFlutter", highlight: true },
      { name: "Dart", icon: "SiDart", highlight: true },
      { name: "Electron", icon: "SiElectron", highlight: true },
      { name: "Tauri", icon: "SiTauri", highlight: true },
      { name: "Cross-Platform", icon: "FiSmartphone" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Database",
    description: "Server environments, REST APIs, and modern BaaS.",
    skills: [
      { name: "Python", icon: "SiPython", highlight: true },
      { name: "Flask", icon: "SiFlask" },
      { name: "RESTful APIs", icon: "SiPostman", highlight: true },
      { name: "Supabase", icon: "SiSupabase", highlight: true },
      { name: "Firebase", icon: "SiFirebase", highlight: true },
    ],
  },
  {
    id: "tools",
    name: "DevOps & Tools",
    description: "Version control, developer toolchains, and cloud deployment.",
    skills: [
      { name: "Git", icon: "SiGit", highlight: true },
      { name: "GitHub", icon: "SiGithub", highlight: true },
      { name: "GitLab", icon: "SiGitlab" },
      { name: "VS Code", icon: "VscVscode" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Vercel", icon: "SiVercel", highlight: true },
      { name: "Netlify", icon: "SiNetlify" },
      { name: "Figma", icon: "SiFigma" },
    ],
  },
];

// ===== FEATURED PROJECTS (ACTUAL WORK) =====

export const projects: Project[] = [
  {
    id: 1,
    title: "Toko Senyum Web Platform",
    category: "Web Platform / E-Commerce Retail",
    description:
      "Platform e-commerce ritel modern yang memfasilitasi pelanggan untuk mencari produk, menjelajahi katalog, dan menyelesaikan transaksi belanja secara mandiri dengan cepat.",
    image: "/images/tokosenyum.png",
    link: "https://tokosenyum.com/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    features: [
      "Dynamic product catalog dengan pencarian dan filter instan",
      "Shopping cart management dan checkout workflow terstruktur",
      "Customer authentication, user profile, dan pelacakan pesanan",
      "Sistem kalkulasi promo, diskon, dan perkiraan ongkos kirim otomatis",
      "Antarmuka yang dioptimasi secara penuh untuk kenyamanan mobile browser",
    ],
  },
  {
    id: 2,
    title: "Central AI Website",
    category: "Corporate Website / AI Solutions",
    description:
      "Website perusahaan PT. Central AI untuk mempresentasikan produk dan layanan berbasis kecerdasan buatan kepada mitra bisnis dan perusahaan.",
    image: "/images/centralai.png",
    link: "https://centralai.my.id/",
    techStack: ["React", "Next.js", "Python", "Flask", "Tailwind CSS"],
    features: [
      "Showcase produk solusi AI (OCR processing, chatbot interaktif)",
      "Presentasi solusi point of sale (POS) dan automated meeting notes",
      "Integrasi API dengan backend berbasis Python dan Flask",
      "Desain responsif di desktop, tablet, dan smartphone dengan animasi yang mulus",
    ],
  },
];

// ===== WORK EXPERIENCE =====

export const experiences: Experience[] = [
  {
    id: 1,
    category: "job",
    role: "Full Stack Developer",
    company: "Senyum Media Group",
    location: "Indonesia",
    period: "Feb 2026 – Present",
    isCurrent: true,
    description:
      "Bertanggung jawab atas pengembangan dan pemeliharaan platform web serta aplikasi mobile perusahaan, berfokus pada frontend engineering, konsistensi antarmuka, dan integrasi backend.",
    responsibilities: [
      "Mengembangkan dan memelihara platform web serta aplikasi mobile perusahaan.",
      "Mengembangkan antarmuka e-commerce responsif menggunakan Next.js, React, TypeScript, dan Tailwind CSS.",
      "Membangun dan memelihara aplikasi mobile cross-platform menggunakan Flutter dan Dart.",
      "Mengintegrasikan antarmuka dengan REST API untuk transaksi, autentikasi pelanggan, dan inventaris.",
      "Mengimplementasikan reusable UI components dan pola state management yang konsisten.",
      "Berkolaborasi dengan UI/UX designer, backend engineer, dan product management.",
    ],
  },
  {
    id: 2,
    category: "internship",
    role: "Frontend Web Developer Intern",
    company: "PT. Central AI",
    location: "Remote",
    period: "2022 – 2023",
    description:
      "Berkontribusi dalam pengembangan website profil perusahaan dan web application klien berorientasi bisnis dan kecerdasan buatan.",
    responsibilities: [
      "Berkontribusi dalam pengembangan website perusahaan dan aplikasi web klien.",
      "Mengembangkan modul aplikasi Point of Sale (POS) dan fitur Progressive Web Application (PWA).",
      "Mengintegrasikan React.js dan Next.js dengan API berbasis Python dan Flask.",
      "Mengoptimalkan performa halaman, transisi, dan kompatibilitas lintas browser.",
    ],
  },
  {
    id: 3,
    category: "academic",
    role: "Asisten Laboratorium Sistem Informasi Geografis",
    company: "Fakultas Ilmu Komputer, Universitas Jember",
    location: "Jember, Indonesia",
    period: "2020 – 2021",
    description:
      "Membimbing mahasiswa sarjana dalam praktikum pemrosesan data spasial dan pemetaan digital berbasis SIG.",
    responsibilities: [
      "Membimbing mahasiswa dalam praktikum pengolahan data geospasial menggunakan QGIS.",
      "Menyiapkan modul praktikum dan skenario pemetaan.",
      "Menilai tugas teknis dan asistensi mingguan mahasiswa.",
      "Membimbing pengerjaan proyek akhir praktikum.",
    ],
  },
];

// ===== EDUCATION & BOOTCAMPS =====

export const educationList: EducationItem[] = [
  {
    id: 1,
    type: "degree",
    title: "S1 Informatika / Bachelor of Informatics",
    institution: "Universitas Jember",
    period: "2019 – 2023",
    location: "Jember, Indonesia",
    achievement: "Cum Laude — IPK 3.74 / 4.00",
    description:
      "Lulusan sarjana informatika dengan fokus studi komprehensif pada rekayasa perangkat lunak, teknologi web, dan kecerdasan buatan.",
    highlights: [
      "Meraih predikat Cum Laude dengan IPK 3.74 / 4.00",
      "Asisten Dosen Mata Kuliah Kecerdasan Buatan (Artificial Intelligence)",
      "Fokus studi: Software Engineering, Web Technologies, Algorithms & Data Structures",
    ],
  },
  {
    id: 2,
    type: "bootcamp",
    title: "Full Stack Web Developer Bootcamp",
    institution: "SIM-K HariSenin",
    period: "2023 – 2024",
    location: "Online",
    description:
      "Program pelatihan intensif rekayasa web menyeluruh dari arsitektur frontend hingga layanan backend dan deployment.",
    highlights: [
      "Full-stack architecture dan modern component engineering",
      "Database management dan query optimization",
      "REST API integration dan secure token authentication",
      "Cloud deployment pipelines",
    ],
  },
  {
    id: 3,
    type: "bootcamp",
    title: "Frontend JavaScript Bootcamp",
    institution: "Binar Academy",
    period: "2022",
    location: "Online",
    description:
      "Program pembelajaran intensif ekosistem JavaScript modern, React.js, dan kolaborasi tim tangkas (Agile/Scrum).",
    highlights: [
      "Penguasaan mendalam JavaScript (ES6+) dan React.js lifecycle",
      "State management dan asynchronous API handling",
      "Kolaborasi tim dalam sprint Agile/Scrum",
    ],
  },
];

// ===== ORGANIZATION & LEADERSHIP =====

export const organizations: OrganizationItem[] = [
  {
    id: 1,
    role: "Head of Public Relations Division",
    organization: "HMIF Universitas Jember",
    period: "2021 – 2022",
    description:
      "Memimpin divisi humas dalam membangun relasi eksternal himpunan, menjalin kemitraan dengan instansi dan organisasi luar, serta mengelola publikasi informasi resmi program studi.",
    responsibilities: [
      "Memimpin perencanaan dan eksekusi program kerja divisi humas selama satu periode kepengurusan.",
      "Menjalin dan menjaga komunikasi formal dengan organisasi mahasiswa eksternal dan mitra institusi.",
      "Mengelola publikasi media dan penyebaran informasi kegiatan mahasiswa informatika.",
    ],
  },
  {
    id: 2,
    role: "Member of Public Relations Division",
    organization: "HMIF Universitas Jember",
    period: "2019 – 2021",
    description:
      "Terlibat aktif dalam komunikasi organisasi, penyelenggaraan seminar teknologi, dan publikasi kegiatan mahasiswa.",
    responsibilities: [
      "Mendukung publikasi acara akademik, seminar teknologi, dan workshop mahasiswa.",
      "Berperan sebagai penghubung komunikasi antar departemen dan mahasiswa angkatan.",
    ],
  },
];

// ===== SERVICES (WHAT I BUILD) =====

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "Membangun aplikasi web modern, cepat, dan responsif dengan arsitektur frontend yang terstruktur dan scalable.",
    technologies: ["React", "Next.js", "Vue", "SvelteKit", "TypeScript"],
    icon: "FiGlobe",
  },
  {
    id: 2,
    title: "Cross-Platform Mobile Apps",
    description:
      "Mengembangkan aplikasi mobile untuk Android dan iOS dari satu basis kode dengan performa native dan UI konsisten.",
    technologies: ["Flutter", "Dart", "REST API", "Mobile UI"],
    icon: "FiSmartphone",
  },
  {
    id: 3,
    title: "Desktop Application Development",
    description:
      "Eksplorasi dan pengembangan aplikasi desktop lintas sistem operasi (Windows, macOS, Linux) yang efisien.",
    technologies: ["Electron", "Tauri", "Web Technologies"],
    icon: "FiMonitor",
  },
  {
    id: 4,
    title: "UI/UX Engineering & Design Systems",
    description:
      "Merancang antarmuka pengguna yang konsisten, komponen modular yang reusable, dan interaksi yang intuitif.",
    technologies: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "Figma"],
    icon: "FiLayout",
  },
  {
    id: 5,
    title: "API & Backend Service Integration",
    description:
      "Menghubungkan antarmuka pengguna dengan backend API, otentikasi data, database, dan platform cloud services.",
    technologies: ["REST APIs", "Python", "Flask", "Supabase", "Firebase"],
    icon: "FiServer",
  },
  {
    id: 6,
    title: "Code Management & CI/CD",
    description:
      "Manajemen source code yang rapi, branch workflow terstandarisasi, dan otomatisasi deployment ke platform cloud.",
    technologies: ["Git", "GitHub", "GitLab", "Vercel", "Netlify"],
    icon: "FiGitBranch",
  },
];

// ===== CERTIFICATES ARCHIVE =====

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cum Laude Honors Award",
    issuer: "Universitas Jember",
    year: "2023",
    description:
      "Piagam penghargaan kelulusan sarjana dengan predikat pujian (Cum Laude, IPK 3.74).",
    image: "/images/certificate_9.jpg",
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    issuer: "Binar Academy",
    year: "2023",
    description:
      "Sertifikat kelulusan program intensif Full Stack Web Developer.",
    image: "/images/certificate_8.jpg",
  },
  {
    id: 3,
    title: "Front End JavaScript Wave 2",
    issuer: "Binar Academy",
    year: "2022",
    description:
      "Sertifikat kelulusan program intensif Frontend Web Development dengan React dan modern JS.",
    image: "/images/certificate_7.png",
  },
  {
    id: 4,
    title: "MSIB Internship Batch 3",
    issuer: "PT. Central AI",
    year: "2022",
    description:
      "Sertifikat program magang bersertifikat Kemendikbudristek di PT Central AI.",
    image: "/images/certificate_6.jpg",
  },
  {
    id: 5,
    title: "Head of Public Relations Division",
    issuer: "HMIF Universitas Jember",
    year: "2021 – 2022",
    description:
      "Sertifikat pengabdian kepemimpinan sebagai Ketua Divisi Hubungan Masyarakat.",
    image: "/images/certificate_5.jpg",
  },
  {
    id: 6,
    title: "Member of Public Relations Division",
    issuer: "HMIF Universitas Jember",
    year: "2020 – 2021",
    description:
      "Sertifikat pengabdian keanggotaan Divisi Humas HMIF UNEJ.",
    image: "/images/certificate_4.jpg",
  },
  {
    id: 7,
    title: "Member of Public Relations Division",
    issuer: "HMIF Universitas Jember",
    year: "2019 – 2020",
    description:
      "Sertifikat keaktifan divisi humas dalam organisasi kemahasiswaan.",
    image: "/images/certificate_3.jpg",
  },
  {
    id: 8,
    title: "Laboratory Assistant in Geographic Information System",
    issuer: "Universitas Jember",
    year: "2020 – 2021",
    description:
      "Sertifikat pengalaman sebagai asisten laboratorium SIG.",
    image: "/images/certificate_2.jpg",
  },
  {
    id: 9,
    title: "Assistant Lecturer in GIS Laboratory",
    issuer: "Universitas Jember",
    year: "2020 – 2021",
    description:
      "Sertifikat pengalaman asisten dosen praktikum SIG.",
    image: "/images/certificate_1.jpg",
  },
];
