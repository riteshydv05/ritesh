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

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  headline: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
