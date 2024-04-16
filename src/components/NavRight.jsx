import { FaGithub, FaMoon, FaSun } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../app/features/basicSlice";

export const SourceCode = ({ className }) => {
  return (
    <a href="/" className={`${className}`}>
      <FaGithub />
    </a>
  );
};
SourceCode.propTypes;

export const DarkBtn = ({ className }) => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleDark())} className={`${className} h-5 w-5 overflow-hidden`}>
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
};
DarkBtn.propTypes;
