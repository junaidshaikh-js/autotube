export const SecondaryBtnOutline = ({ children, cnames, type = "button" }) => {
  return (
    <button className={`btn btn-auto-secondary-outline ${cnames}`} type={type}>
      {children}
    </button>
  );
};
