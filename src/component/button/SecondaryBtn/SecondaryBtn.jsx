export const SecondaryBtn = ({ children, cnames, type = "button" }) => {
  return (
    <button className={`btn btn-auto-secondary ${cnames}`} type={type}>
      {children}
    </button>
  );
};
