import { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    title: "Kurosawa's Story -",
    link: "https://kurosawa-gray.vercel.app",
    colour: "#ffffe6",
    images: [
      "/projectSC/pj_kuro_01.png",
      "/projectSC/pj_kuro_02.png",
      "/projectSC/pj_kuro_03.png",
      "/projectSC/pj_kuro_04.png",
    ],
    techstack: ["HTML", "CSS", "React", "Typescript"],
    codeLink: "",
    desc: "I aimed to tell the story of acclaimed director Akira Kurosawa's career. It journeys from the foundations of his career as a painter - to becoming one of the most influential directors.",
  },
  {
    title: "Furniture Shop /",
    link: "https://furniture-shop-drab.vercel.app",
    colour: "#555555",
    images: [
      "/projectSC/pj_furn_01.png",
      "/projectSC/pj_furn_02.png",
      "/projectSC/pj_furn_03.png",
      "/projectSC/pj_furn_04.png",
    ],
    techstack: ["HTML", "CSS", "React", "Typescript"],
    codeLink: "",
    desc: "An e-commerce store built to sell modern, designer furniture. I wanted the website to mirror the style of the furniture: modern yet sleek.",
  },
  {
    title: "Game Hub Search *",
    link: "https://game-hub-eosin-chi.vercel.app",
    colour: "#aaaaaa",
    desc: "A way to browse a database of video-games via a SPA, allowing the user ability to sort and filter by many fields. I worked with an API to retrieve data from the backend.",
    images: ["/projectSC/pj_game_01.png"],
    techstack: ["HTML", "CSS", "React", "Typescript"],
    codeLink: "",
  },
];
