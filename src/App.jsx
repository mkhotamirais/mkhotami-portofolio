import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenNav } from "./app/features/basicSlice";
import { useEffect } from "react";

const App = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  const handleApp = () => {
    if (openNav) dispatch(removeOpenNav());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
    });
  }, [dispatch, openNav]);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-800`}>
      <Header />
      <main onClick={handleApp} className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
