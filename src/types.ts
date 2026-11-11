export interface SurveyItem {
  label: string;
  percentage: number;
  description?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  focus: string;
  image?: string;
  objectPosition?: string;
  transformScale?: string;
}

export interface VideoConfig {
  kind: 'none' | 'youtube' | 'mp4' | 'link';
  src: string;
  title: string;
  poster: string;
}

export interface GreenValue {
  title: string;
  subtitle: string;
  points: string[];
}
