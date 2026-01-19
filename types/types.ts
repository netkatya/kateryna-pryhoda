export type ProjectType = "commercial" | "educational" | "personal";

export interface ProjectDetails {
  role: string;
  collaboration: string;
  responsibilities: string[];
  problemSolved: string | string[];
  outcome: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
  type: ProjectType;
  details: ProjectDetails;
  gallery: string[];
}
