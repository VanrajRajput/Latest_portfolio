export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  features: string[];
  metrics: Metric[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  logo: string;
  description: string;
  credentialLink: string;
  issueDate: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Personal {
  name: string;
  position: string;
  summary: string;
  profileImage: string;
  resumeUrl: string;
  education: {
    institution: string;
    degree: string;
    gpa: string;
  };
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface PortfolioData {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  skills: Record<string, string[]>;
  contact: Contact;
  socials: SocialLink[];
}
