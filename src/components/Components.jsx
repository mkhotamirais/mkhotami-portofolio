import { GithubIcons8, LinkedinIcons8 } from "./IconsSvg";

export const Logo = ({ className }) => {
  return (
    <a
      href="/"
      className={`${className} flex flex-col gap-1 bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500 bg-clip-text`}
    >
      <div className="text-xl font-semibold leading-none text-transparent">Mkhotami</div>
      <div className="text-sm leading-none text-transparent">Portofolio</div>
    </a>
  );
};
Logo.propTypes;

export const MyFoto = ({ className }) => {
  return (
    <figure className={`${className}`}>
      <img
        src="https://github.com/mkhotamirais/mkhotamirais.github.io/blob/main/images/me2-removebg.png?raw=true"
        alt="me"
        className="border-t-4 shadow-lg h-52 md:h-72 rounded-full bg-gradient-to-tr from-red-200 via-green-200 to-blue-200"
      />
    </figure>
  );
};
MyFoto.propTypes;

export const ContactLink = ({ className, href, icon, text }) => {
  return (
    <a href={href} className={`${className} flex flex-col items-center gap-2`}>
      {icon}
      {/* <FaWhatsappSquare className="text-[#1b8755] text-4xl inline-block" /> */}
      <span>{text}</span>
    </a>
  );
};
ContactLink.propTypes;

export const Socials = ({ className }) => {
  const socialsList = [
    { title: "github", icon: <GithubIcons8 size="28" />, href: "https://github.com/mkhotamirais" },
    { title: "linkedin", icon: <LinkedinIcons8 size="28" />, href: "https://www.linkedin.com/in/mkhotami-tami/" },
  ];

  return (
    <div className={`${className} flex gap-2`}>
      {socialsList.map((sl, i) => (
        <a
          key={i}
          href={sl.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 hover:scale-110 transition-all duration-200"
        >
          {sl.icon}
        </a>
      ))}
    </div>
  );
};
Socials.propTypes;

export const SkillLink = ({ item }) => {
  return (
    <a
      href={item.url}
      target="blank"
      rel="noopener"
      key={item.text}
      className="bg-[rgba(0,0,0,.5)] rounded-lg p-3 flex flex-col gap-2 items-center hover:scale-110 transition-all duration-100"
    >
      <div className="text-3xl">{item.icon}</div>
      <h3 className="text-white">{item.text}</h3>
    </a>
  );
};
SkillLink.propTypes;
