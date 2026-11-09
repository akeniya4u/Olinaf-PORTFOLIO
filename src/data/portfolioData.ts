export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  buttonLabel: string;
  githubUrl?: string;
  featured: boolean;
  objectives?: string[];
  keyFeatures: string[];
  architectureNotes?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleTitle?: string;
  organization: string;
  employmentType?: string;
  location?: string;
  workplaceType?: string;
  period?: string;
  duration?: string;
  type: 'Professional' | 'Community' | 'Environmental' | 'Internship';
  description: string;
  highlights?: string[];
  skills?: string[];
  image?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period?: string;
  description: string;
  keyAreas: string[];
  academicFocus: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skillsAcquired: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Olinaf Tesfaye",
    shortName: "Olinaf",
    title: "Software Engineering Student | Web Developer | AI Enthusiast",
    headline: "Building Digital Solutions Through Software and AI.",
    subheading: "I'm Olinaf Tesfaye, a Software Engineering student, web developer, and AI enthusiast from Ethiopia.",
    description: "I build practical digital products, explore emerging technologies, and develop solutions to real-world problems.",
    location: "Ethiopia",
    university: "Haramaya University",
    degree: "BSc in Software Engineering",
    email: "olinaftesfayea@gmail.com",
    avatarImage: "/src/assets/images/olinaf_personal_photo.jpg",
    socialLinks: {
      github: "https://github.com/akeniya4u",
      githubUsername: "akeniya4u",
      linkedin: "https://www.linkedin.com/in/olinaf-abdisa/",
      email: "mailto:olinaftesfayea@gmail.com",
    },
    aboutParagraphs: [
      "I'm a Software Engineering student at Haramaya University with an interest in web development, artificial intelligence, automation, and digital innovation.",
      "My experience includes building web applications, exploring AI-powered tools, and working with digital productivity platforms.",
      "I also participate in environmental activities and community initiatives. Through these experiences, I have developed an interest in using technology to address practical challenges.",
      "I'm continuously learning, building projects, and improving my technical and professional skills."
    ],
    infoCards: [
      {
        title: "Software Engineering Student",
        description: "Studying core engineering principles, algorithms, data structures, and distributed systems at Haramaya University."
      },
      {
        title: "Web Developer",
        description: "Building responsive, modern web interfaces and practical full-stack digital solutions."
      },
      {
        title: "AI & Technology Enthusiast",
        description: "Exploring AI workflows, prompt engineering, Google AI Studio, and automation platforms to solve tangible everyday needs."
      }
    ],
    additionalBackground: [
      "ALX Africa Certified Virtual Assistant.",
      "Web development and AI-assisted application development.",
      "Experience with administrative support, research, and automation.",
      "Environmental volunteering and community engagement."
    ]
  },

  projects: [
    {
      id: "injerafit",
      title: "InjeraFIT",
      category: "AI | Web Development | Nutrition Technology",
      shortDescription: "An AI-powered Ethiopian nutrition and weight-tracking web application.",
      fullDescription: "InjeraFIT is an AI-powered Ethiopian nutrition and weight-tracking web application. It helps users track their meals, calculate estimated nutritional values, monitor daily calorie and protein intake, and follow their weight progress.\n\nThe platform focuses on making nutrition tracking accessible to people who eat traditional Ethiopian foods.",
      image: "/src/assets/images/project_injerafit_1794203644965.jpg",
      tags: ["AI", "Web Development", "Nutrition Tech"],
      liveUrl: "https://injerafit.ai.studio/",
      buttonLabel: "Live Demo",
      featured: true,
      keyFeatures: [
        "AI-powered meal analysis",
        "Ethiopian food nutrition tracking",
        "Food quantity entry in grams",
        "Calorie and macronutrient tracking",
        "Daily protein and calorie goals",
        "Weight progress tracking"
      ],
      architectureNotes: "Developed to bring AI-assisted dietary intelligence and accessible portion tracking to traditional Ethiopian nutrition."
    },
    {
      id: "visit-harar",
      title: "Visit Harar",
      category: "Web Development | Tourism | Digital Promotion",
      shortDescription: "A tourism website created to promote Harar, Ethiopia, and its rich cultural heritage.",
      fullDescription: "Visit Harar is a tourism website created to promote Harar, Ethiopia. The platform introduces visitors to the city's history, cultural heritage, tourist attractions, and unique identity.\n\nThe project aims to improve Harar's digital visibility and help people explore the city.",
      image: "/src/assets/images/project_visitharar_1794203645680.jpg",
      tags: ["Web Development", "Tourism Promotion", "Digital Promotion"],
      liveUrl: "https://visitharar.netlify.app/",
      buttonLabel: "Live Demo",
      featured: true,
      keyFeatures: [
        "Tourism promotion",
        "Cultural and historical presentation",
        "Digital destination discovery",
        "Tourism-focused web development"
      ],
      architectureNotes: "Live destination platform designed to increase Harar's global digital footprint and assist travelers in exploring its cultural landmarks."
    },
    {
      id: "employee-attendance",
      title: "Employee Attendance System",
      category: "Software Development | Telegram Bot | Automation",
      shortDescription: "An employee attendance system developed using a Telegram bot with local Wi-Fi verification.",
      fullDescription: "An employee attendance system developed using a Telegram bot. The system supports employee check-ins through local Wi-Fi verification, helping ensure employees connect to the required workplace network before checking in.",
      image: "/src/assets/images/project_attendance_1794203647666.jpg",
      tags: ["Software Development", "Telegram Bot", "Automation"],
      liveUrl: "https://t.me/bbbattendance_bot",
      buttonLabel: "Open Telegram Bot",
      featured: true,
      keyFeatures: [
        "Telegram bot integration",
        "Employee attendance check-ins",
        "Local Wi-Fi verification",
        "Automated attendance workflow"
      ],
      architectureNotes: "Integrates Telegram's messaging infrastructure (@bbbattendance_bot) with network-level authentication to automate employee check-ins."
    }
  ] as Project[],

  skills: [
    {
      name: "Programming and Web Development",
      description: "Frontend and foundational software engineering technologies",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Web Development" }
      ]
    },
    {
      name: "AI and Automation",
      description: "Modern artificial intelligence tooling and workflow orchestrations",
      skills: [
        { name: "Google AI Studio" },
        { name: "AI-assisted development" },
        { name: "Prompt Engineering" },
        { name: "n8n" },
        { name: "Zapier" }
      ]
    },
    {
      name: "Virtual Assistance and Productivity",
      description: "Digital operations, research, organization, and administrative systems",
      skills: [
        { name: "Administrative Support" },
        { name: "Email Management" },
        { name: "Calendar Management" },
        { name: "Online Research" },
        { name: "Lead Generation" },
        { name: "CRM Management" },
        { name: "Google Workspace" },
        { name: "Notion" }
      ]
    },
    {
      name: "Design and Content",
      description: "Visual design, media editing, and community social presence",
      skills: [
        { name: "Canva" },
        { name: "CapCut" },
        { name: "Social Media Management" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "glowup-acs",
      role: "Virtual Assistant",
      roleTitle: "Intern | IT Support & Virtual Assistant at GlowUp ACS",
      organization: "GlowUp ACS",
      employmentType: "Internship",
      period: "March 2026 - June 2026",
      duration: "4 months",
      location: "Paterson, New Jersey, United States",
      workplaceType: "Remote",
      type: "Internship",
      description: "Supported IT operations and administrative activities as a remote intern, assisting with technical troubleshooting, team coordination, and daily administrative tasks.",
      highlights: [
        "Assisted with IT troubleshooting and technical support.",
        "Managed schedules, emails, and administrative tasks.",
        "Supported team workflows and project organization.",
        "Gained hands-on experience in virtual assistance and IT operations."
      ],
      skills: [
        "Notion",
        "Productivity Software",
        "Customer Relationship Management (CRM)",
        "Virtual Assistance",
        "IT Support",
        "Administrative Support",
        "Email Management",
        "Project Organization"
      ]
    },
    {
      id: "alx-africa",
      role: "Certified Virtual Assistant",
      organization: "ALX Africa",
      type: "Professional",
      description: "Completed professional training in virtual assistance, developing skills in administrative support, communication, online research, productivity tools, and digital organization.",
      highlights: [
        "Executive administrative workflows & calendar management",
        "Online research synthesis and lead generation strategies",
        "Digital productivity tooling with Google Workspace and Notion"
      ]
    },
    {
      id: "kubik-volunteering",
      role: "Environmental Volunteer",
      organization: "Kubik",
      location: "Harar, Ethiopia",
      type: "Community",
      description: "Participate in community-based environmental activities focused on plastic recycling, waste management awareness, and environmental protection.",
      highlights: [
        "Community engagement on circular economy and plastic waste recovery",
        "Harar neighborhood cleanup and recycling mobilization",
        "Supporting sustainable construction alternatives using recycled plastics"
      ]
    }
  ] as ExperienceItem[],

  education: {
    institution: "Haramaya University",
    degree: "Bachelor of Science in Software Engineering",
    field: "Software Engineering",
    location: "Ethiopia",
    description: "Studying software engineering with an interest in software development, programming, artificial intelligence, and practical technology solutions.",
    keyAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Web Technologies & Systems",
      "Database Management Systems",
      "Software Design & Architecture"
    ],
    academicFocus: [
      "Practical digital solutions development",
      "AI-assisted software engineering practices",
      "Community-centered technology problem solving"
    ]
  } as EducationItem,

  certifications: [
    {
      id: "alx-cva",
      title: "ALX Africa Certified Virtual Assistant",
      organization: "ALX Africa",
      description: "Rigorous professional development program mastering digital productivity, asynchronous communication, CRM and email management, and executive support systems.",
      credentialUrl: "https://alxafrica.com", // Editable placeholder
      skillsAcquired: [
        "Administrative Support",
        "Google Workspace Suite",
        "Email & Calendar Management",
        "Online Research & Lead Generation",
        "Productivity Tooling"
      ]
    }
  ] as CertificateItem[]
};
