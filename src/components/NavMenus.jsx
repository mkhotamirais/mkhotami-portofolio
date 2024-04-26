import { FaBars, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenNav, toggleOpenNav } from "../app/features/basicSlice";
import { useEffect, useState } from "react";

const menus = ["about", "skills", "projects", "contact"];

export const NavContent = ({ onClick, className }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const aboutTop = document.getElementById("about").offsetTop - 200;
    const skillsTop = document.getElementById("skills").offsetTop - 200;
    const projectsTop = document.getElementById("projects").offsetTop - 200;
    const contactTop = document.getElementById("contact").offsetTop - 200;
    window.addEventListener("scroll", () => {
      if (window.scrollY < aboutTop) setActive(null);
      if (window.scrollY >= aboutTop) setActive("about");
      if (window.scrollY >= skillsTop) setActive("skills");
      if (window.scrollY >= projectsTop) setActive("projects");
      if (window.scrollY >= contactTop) setActive("contact");
    });
  }, []);

  return menus.map((item, i) => (
    <a
      onClick={onClick}
      href={`#${item}`}
      key={i}
      className={`${className} ${active == `${item}` ? "text-cyan-600" : ""} capitalize hover:text-cyan-600`}
    >
      {item}
    </a>
  ));
};
NavContent.propTypes;

export const NavBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  const handleNav = () => {
    dispatch(toggleOpenNav());
  };

  return (
    <button onClick={handleNav} className={`${openNav ? "rotate-180" : ""} text-xl flex transition-all duration-150`}>
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

export const NavCollapse = ({ className }) => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleNavMenu = () => {
    dispatch(removeOpenNav());
  };

  return (
    <div
      className={`${className} z-50 bg-white fixed w-full top-16 flex flex-col rounded-b-lg px-3 ${
        openNav ? "scale-100" : "scale-y-0"
      } origin-top pt-2 pb-4 border-b block sm:hidden overflow-hidden transition-all duration-150`}
    >
      <NavContent onClick={handleNavMenu} className={"py-2 border-b"} />
    </div>
  );
};
NavCollapse.propTypes;

export const NavMain = ({ className }) => {
  return (
    <div className={`${className} hidden sm:flex gap-3 ml-2 md:ml-6`}>
      <NavContent className={"flex gap-3"} />
    </div>
  );
};
NavMain.propTypes;
