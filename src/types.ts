export interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
  impact: string[];
  tags: string[];
  platform?: string;
  tools?: string[];
  problem?: string;
  goal?: string;
  research?: { title: string; desc: string }[];
  mainFeatures?: string[];
  userFlow?: string[];
  wireframes?: string[];
  highFidelity?: { title: string; desc: string; image: string }[];
  designSystem?: {
    colors: { name: string; hex: string }[];
    typography: string[];
    components: string[];
  };
}

export interface Skill {
  category: string;
  items: string[];
}
