export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'ai' | 'other';
  github?: string;
  liveLink?: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
