import { Button, H1, Section } from "../components/Tags";
import { ContactLink, SkillLink } from "../components/Components";
import { GmailIcons8, LinkedinIcons8, WhatsAppIcons8 } from "../components/IconsSvg";
import { useSelector } from "react-redux";
import {
  BootstrapIcon,
  CssIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  ViteIcon,
} from "../components/Icons";
import { CgFileDocument } from "react-icons/cg";
import Projects from "./Projects";
import Top from "./Top";

const contactMenus = [
  { text: "087766606133", href: "https://api.whatsapp.com/send/?phone=6287766606133", icon: <WhatsAppIcons8 size="48" /> },
  { text: "Mkhotami Rais", href: "mailto.mkhotamirais@gmail.com", icon: <LinkedinIcons8 size="48" /> },
  { text: "mkhotamirais@gmail.com", href: "https://www.linkedin.com/in/mkhotami-rais/", icon: <GmailIcons8 size="48" /> },
];

const skillIcons = [
  { text: "HTML", icon: <HtmlIcon />, url: "https://www.w3schools.com/html/default.asp" },
  { text: "CSS", icon: <CssIcon />, url: "https://www.w3schools.com/css/default.asp" },
  { text: "Vite", icon: <ViteIcon />, url: "https://vitejs.dev/" },
  { text: "GitHub", icon: <GitHubIcon />, url: "https://github.com/" },
  { text: "Git", icon: <GitIcon />, url: "https://git-scm.com/" },
  { text: "MySql", icon: <MysqlIcon />, url: "https://www.mysql.com" },
  { text: "Bootstrap", icon: <BootstrapIcon />, url: "https://getbootstrap.com/" },
  { text: "Tailwindcss", icon: <TailwindIcon />, url: "https://tailwindcss.com/" },
  { text: "Javascript", icon: <JavascriptIcon />, url: "https://www.w3schools.com/js/default.asp" },
  { text: "Node.js", icon: <NodejsIcon />, url: "https://nodejs.org/en" },
  { text: "React", icon: <ReactIcon />, url: "https://react.dev/" },
  { text: "Express", icon: <ExpressIcon />, url: "https://expressjs.com/" },
  { text: "Mongodb", icon: <MongodbIcon />, url: "https://www.mongodb.com/" },
];

const Home = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <>
      <Top />
      <Section id="about">
        <H1>About Me</H1>
        <ul className="list-disc list-inside p-5 rounded-xl mt-3 leading-loose border mx-auto md:w-full xl:w-2/3 shadow-lg">
          <li>I focused on the realm of web programming to be a MERN Stack Developer.</li>
          <li>Graduated from UIN Jakarta in 2022, majoring in Arabic Language and Literature.</li>
          <li>Iterested in website programming then learned Javascript and ReactJS to accelerate front-end projects.</li>
          <li>Improved some projects by learning NodeJS and MongoDB for server-side and database.</li>
          <li>Created a single page application and manage rest API.</li>
          <li>Accustomed to using computers since in high school especially MS Office.</li>
          <li>Managed data with MS Excel until knew VBA and interested in programming.</li>
          <li>Focused on the realm of web programming to be a MERN Stack Developer.</li>
          <a
            href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/edit"
            target="blank"
            rel="noopener"
          >
            <Button className={"py-3 px-6 my-3 rounded-lg flex items-center gap-2"}>
              <CgFileDocument className="text-xl inline-block" /> View CV
            </Button>
          </a>
        </ul>
      </Section>
      <Section id="skills" className={`overlay ${!dark ? "text-white" : ""}`}>
        <H1>Skills</H1>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
          {skillIcons.map((item, i) => (
            <SkillLink key={i} item={item} />
          ))}
        </div>
      </Section>
      <Section id="projects">
        <H1>Projects</H1>
        <Projects />
      </Section>
      <Section id="contact">
        <H1>Contact Me</H1>
        <div className="text-base md:text-lg grid grid-rows-3 sm:grid-cols-3 gap-3 py-3">
          {contactMenus.map((item, i) => (
            <ContactLink key={i} text={item.text} href={item.href} icon={item.icon} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
