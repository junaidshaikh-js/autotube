export const PrimaryBtn = ({ children, cnames, type = "button" }) => {
  return (
    <button className={`btn btn-auto-primary ${cnames}`} type={type}>
      {children}
    </button>
  );
};
