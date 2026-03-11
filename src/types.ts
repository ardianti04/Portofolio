export interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
  impact: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
