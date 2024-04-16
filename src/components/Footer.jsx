import { useSelector } from "react-redux";
import { Logo, Socials } from "./Components";

const Footer = () => {
  const { dark } = useSelector((state) => state.basic);

  const MernProjectsList = [
    { title: "eduwork pos", href: "https://github.com/mkhotamirais/mkhotami-mern-eduwork" },
    { title: "mkhotami ecommerce ", href: "https://github.com/mkhotamirais/mkhotami-mern" },
  ];

  const PublicApisProjectList = [
    { title: "jsonplaceholder", href: "https://panduan-public-apis.vercel.app/jsonplaceholder" },
    { title: "omdbapi", href: "https://panduan-public-apis.vercel.app/omdbapi" },
    { title: "newsapi", href: "https://panduan-public-apis.vercel.app/newsapi" },
    { title: "sistem toko", href: "https://panduan-public-apis.vercel.app/sisko" },
    { title: "fakestoreapi", href: "https://panduan-public-apis.vercel.app/fakestoreapi" },
  ];

  const BasicProjectsList = [
    { title: "eduwork projects", href: "https://mkhotami-eduwork.vercel.app/" },
    { title: "react todo", href: "https://panduan-reactjs.vercel.app/mini-projects/react-crud" },
    { title: "redux product list", href: "https://panduan-reactjs.vercel.app/mini-projects/redux-crud" },
    { title: "react todo2", href: "https://panduan-reactjs.vercel.app/mini-projects/todo-list" },
    { title: "ringkasan", href: "https://mkhotami-ringkasan.vercel.app/" },
  ];

  const HostingProjectsList = [{ title: "hadinalmusri", href: "https://hadinalmusri.com/" }];

  return (
    <footer className={`mt-5 border-t ${dark ? "bg-slate-800" : "bg-gradient-to-t from-blue-100 to-white"}`}>
      <div className="pt-5">
        <div className="px-3 py-5 lg:px-16 gap-8 md:gap-16 lg:gap-36 xl:gap-60 flex flex-col md:flex-row justify-between">
          <Logo />
          <div className="w-full flex flex-col sm:flex-row gap-5 justify-between mb-5">
            <FooterLinkList title="MERN Projects" data={MernProjectsList} />
            <FooterLinkList title="Public Apis Projects" data={PublicApisProjectList} />
            <FooterLinkList title="Basic Projects" data={BasicProjectsList} />
            <FooterLinkList title="Hosting Projects" data={HostingProjectsList} />
          </div>
        </div>
        <div className="text-sm px-3 lg:px-16 py-3 text-gray-600 flex flex-col gap-2 sm:flex-row justify-between items-center">
          <div className="order-2 sm:order-1">
            Copyright <sup>&copy;</sup> {new Date().getFullYear()}{" "}
            <a href="https://mkhotamirais.github.io/" className="text-blue-600 hover:underline">
              mkhotami
            </a>
          </div>
          <Socials className={"order-1 sm:order-2"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinkList = ({ data, title }) => {
  const { dark } = useSelector((state) => state.basic);

  return (
    <div>
      <h4 className="mb-4 font-medium">{title}</h4>
      <div className={`flex flex-col gap-2 items-start ${dark ? "text-white" : "text-gray-500"}`}>
        {data.map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
FooterLinkList.propTypes;
