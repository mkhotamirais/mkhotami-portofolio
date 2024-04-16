export const Section = ({ className, id, children }) => {
  return (
    <section id={id} className={`${className} py-8 px-3 lg:px-16 min-h-[50vh] scroll-mt-60 sm:scroll-mt-16`}>
      {children}
    </section>
  );
};
Section.propTypes;

export const H1 = ({ children, className }) => (
  <h1 className={`${className} capitalize font-semibold text-2xl lg:text-3xl lg:py-3 leading-loose text-center mb-4`}>
    {children}
  </h1>
);
H1.propTypes;

export const Button = ({ children = "button", type = "button", disabled, onClick, className }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${className} bg-blue-500 text-white leading-none p-2 rounded hover:opacity-70 disabled:opacity-70`}
  >
    {children}
  </button>
);
Button.propTypes;
