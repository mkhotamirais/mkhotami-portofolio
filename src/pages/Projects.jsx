import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const projectsList = [
  {
    name: "todo list 1",
    description:
      "This project provides CRUD operation features with simple notification. The data is stored in localStorage. The react hook used is only useState and useEffect.",
    tools: "Front-end: React, Redux, Tailwindcss, ReactIcons. Back-end: localStorage",
    githubLink: "https://github.com/mkhotamirais/panduan-react/tree/main/src/pages/mini-projects/react-crud",
    demoLink: "https://panduan-reactjs.vercel.app/mini-projects/react-crud",
  },
  {
    name: "todo list 2",
    description:
      "This project provides CRUD operation features with notification by Notistack. The data is stored in localStorage. The react hook used is only useState, useEffect, useReducer dan useContext.",
    tools: "Front-end: React, Redux, Tailwindcss, ReactIcons, Notistack. Back-end: localStorage",
    githubLink: "https://github.com/mkhotamirais/panduan-react/tree/main/src/pages/mini-projects/todo-list",
    demoLink: "https://panduan-reactjs.vercel.app/mini-projects/todo-list",
  },
  {
    name: "sisko",
    description:
      "This project displays products data from public api sistem toko in grid system cards form. Includes viewport for any device. Equipped with dark mode, breadcrumb, data filter and data search.",
    tools: "Front-end: React, Redux, Axios, Reacticons, Tailwindcss. Back-end: public api sistem toko",
    githubLink: "https://github.com/mkhotamirais/panduan-public-apis/tree/main/src/pages/apis/sisko",
    demoLink: "https://panduan-public-apis.vercel.app/sisko/product",
  },
  {
    name: "jsonplaceholder",
    description:
      "This project displays posts and users data from public api Jsonplaceholder in grid system cards form. Includes viewport for any device. Equipped with dark mode, breadcrumb and dummy crud.",

    tools: "Front-end: React, Redux, Axios, Reacticons, Tailwindcss. Back-end: public api Jsonplaceholder",
    githubLink: "https://github.com/mkhotamirais/panduan-public-apis/tree/main/src/pages/apis/jsonplaceholder/post",
    demoLink: "https://panduan-public-apis.vercel.app/jsonplaceholder/posts",
  },
  {
    name: "omdbapi",
    description:
      "This project displays movies data from public api Omdbapi in grid system cards form. Includes viewport for any device. Equipped with dark mode, breadcrumb, data filter and data search.",

    tools: "Front-end: React, Redux, Axios, Reacticons, Tailwindcss. Back-end: public api Omdbapi",
    githubLink: "https://github.com/mkhotamirais/panduan-public-apis/tree/main/src/pages/apis/omdbapi/movie",
    demoLink: "https://panduan-public-apis.vercel.app/omdbapi/movies",
  },
  {
    name: "kamus mini",
    description:
      "This project provides simple live search with limited result. The data is an array of objects containing a list of terms and their meanings, stored manually in javascript file.",
    tools: "Front-end: React, Redux, Tailwindcss, ReactIcons",
    githubLink: "https://github.com/mkhotamirais/mkhotami-ringkasan",
    demoLink: "https://mkhotami-ringkasan.vercel.app/",
  },
];

const Projects = () => {
  const [active, setActive] = useState("todo list 1");
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {projectsList.map((item, i) => (
          <button
            onClick={() => setActive(item.name)}
            key={i}
            className={`${
              item.name === active ? "bg-blue-600 text-white" : ""
            } border rounded-lg p-2 capitalize font-medium`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {projectsList.map((item, i) => (
        <div key={i} className={`${item.name === active ? "block" : "hidden"} gap-3 flex flex-col lg:flex-row`}>
          <div className="border flex-1 rounded-lg p-1 overflow-hidden shadow">
            <iframe src={item.demoLink} className="w-full h-80 bg-white" />
          </div>
          <div className={`border flex-1 rounded-lg p-3 leading-relaxed flex flex-col gap-2 shadow`}>
            <div className="capitalize">
              <span className="font-medium">Name : </span>
              {item.name}
            </div>
            <div>
              <span className="font-medium">Description : </span>
              {item.description}
            </div>
            <div>
              <span className="font-medium">Tools : </span>
              {item.tools}
            </div>
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-2 hover:text-blue-500 max-w-min"
            >
              <FaGithub /> Github
            </a>
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-2 hover:text-blue-500 max-w-min"
            >
              <FaGlobe /> Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
