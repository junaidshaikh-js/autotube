export const PrimaryBtnOutline = ({ children, cnames, type = "button" }) => {
  return (
    <button className={`btn btn-auto-primary-outline ${cnames}`} type={type}>
      {children}
    </button>
  );
};
