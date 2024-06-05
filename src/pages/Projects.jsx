import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const projectsList = [
  {
    name: "todo",
    description:
      "This project explores 3 todo list implementations with identical CRUD functionality. Each uses different tools: some leverage React hooks useState, useEffect, useContext, and useReducer, while another employs Redux. Notifications vary: some are basic, while others utilize Notistack or React Hot Toast libraries. All data is stored in local storage. The development progress of this project has reached 96%. Despite appearing complete, there is a possibility that additional features will be added in the future.",
    tools: "Front-end: React, Redux, Tailwindcss, React-Icons, notistack, react-hot-toast; Back-end: localStorage",
    githubLink: "https://github.com/mkhotamirais/mkhotami/tree/main/src/pages/client-app/todo",
    demoLink: "https://mkhotami.vercel.app/client-app/todo",
  },
  {
    name: "mkhotami app",
    description:
      "This project is a collection of simple MERN stack projects that encompass CRUD HTTP requests, authentication, and authorization features. Additionally, it includes data search, pagination, filtering, and sorting functionalities. One of the projects in this collection is a dictionary application. The development of this project is only at 60% completion, as several other mini projects, including the Note project, will be added soon.",
    tools:
      "Front-end: React, Redux, React-router-dom, Tailwindcss, React-Icons, React-hot-toast; Backend: Nodejs, Expressjs, Mongoose. Bcrypt, Jwt, etc",
    githubLink: "https://github.com/mkhotamirais/mkhotami/tree/main/src/pages/mern-app",
    demoLink: "https://mkhotami.vercel.app/mern-app",
  },
  {
    name: "mkhotami warung",
    description:
      "This project displays product data in a table and grid system layout. The data is retrieved from a MongoDB database and managed on the server side using Express.js. It includes authentication and authorization features where only admins can manage the data, while guests and users have restricted access. The project also offers search, filtering, and sorting functionalities, as well as pagination. Additionally, it is responsive to different viewports and includes a dark mode feature. The development of this project is approximately 80% complete, as the cart and invoice features have not yet been implemented.",
    tools:
      "Front-end: React, Redux, ReactIcons, Tailwindcss, React-hot-toast. Backend: Nodejs, Expressjs, Mongoose. Bcrypt, Jwt, etc.",
    githubLink: "https://github.com/mkhotamirais/warung-ota",
    demoLink: "https://warung-ota.vercel.app/",
  },
  {
    name: "public api",
    description:
      "This project showcases data retrieved from public APIs, including Jsonplaceholder, OmdbAPI, FakestoreAPI, SistemToko, and NewsAPI. The data is presented in a grid system card format, ensuring compatibility across various viewport sizes. Features include dark mode, breadcrumbs, data filtering, and search functionality to enhance user experience and accessibility. The development of this project is approximately 70% complete, as additional another public APIs will be integrated.",
    tools:
      "Front-end: React, Redux, Axios, Reacticons, Tailwindcss; Back-end: Public APIs (Jsonplaceholder, OmdbAPI, FakestoreAPI, SistemToko, and NewsAPI)",
    githubLink: "https://github.com/mkhotamirais/mkhotami/tree/main/src/pages/client-app",
    demoLink: "https://mkhotami.vercel.app/client-app/omdbapi",
  },
];

const Projects = () => {
  const [active, setActive] = useState("todo");
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
