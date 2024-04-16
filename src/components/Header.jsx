import { useSelector } from "react-redux";
import { Logo } from "./Components";
import { NavBtn, NavCollapse, NavMain } from "./NavMenus";
import { DarkBtn, SourceCode } from "./NavRight";

const Header = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <>
      <header className={`z-50 border-b h-16 sticky top-0 ${dark ? "bg-slate-800" : "bg-white"}`}>
        <div className="flex h-full gap-4 items-center justify-between px-3 lg:px-16">
          <Logo />
          <div className="hidden sm:block w-full">
            <NavMain />
          </div>
          <div className="flex gap-4 items-center text-xl w-full sm:w-auto ml-4">
            <DarkBtn />
            <SourceCode />
          </div>
          <div className="block sm:hidden">
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
};

export default Header;
