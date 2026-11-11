export interface ArchitectureStep {
  step: number;
  title: string;
  description: string;
  technologies?: string[];
}

export interface SystemArchitecture {
  summary: string;
  nodes: ArchitectureStep[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  coverImage: string;
  tags: string[];
  problemStatement: string;
  solution: string;
  systemArchitecture: SystemArchitecture;
  implementationDetails: string[];
  keyFeatures: string[];
  technicalChallenges: string[];
  personalContribution: string;
  achievementBadge?: string;
  metricsOrResults?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  description?: string;
}

export interface TechCategory {
  categoryName: string;
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year?: string;
  badge: string;
  description: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  websiteUrl: string;
  description: string;
  keyContributions: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  headline: string;
  description: string;
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  university: string;
  degree: string;
  duration: string;
  cgpa: string;
}
