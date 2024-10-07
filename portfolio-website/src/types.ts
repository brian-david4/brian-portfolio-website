export interface NavLink {
  to: string;
  title: string;
}
export interface TextHoverType {
  selectedWords: string[];
  images: Array<string[]>;
}
export interface ProjectType {
  title: string;
  link: string;
  colour: string;
  desc: string;
  techstack: string[];
  codeLink: string;
}
