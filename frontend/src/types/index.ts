export type UserRole = 'client' | 'engineer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  client: string;
  status: 'pending' | 'in_progress' | 'completed';
  progress: number;
  sector: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  image?: string;
}

export interface ProjectDocument {
  id: string;
  projectId: string;
  name: string;
  type: string;
  section: string;
  status: 'pending' | 'in_review' | 'approved' | 'rejected';
  uploadDate: string;
  uploader: string;
  fileUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  sectors: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  testimonial?: string;
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  image: string;
}