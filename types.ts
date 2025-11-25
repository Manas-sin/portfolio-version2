export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  EDUCATION = 'education',
  CONTACT = 'contact'
}