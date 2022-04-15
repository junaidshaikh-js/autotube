export const SecondaryBtnOutline = ({
  children,
  cnames,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`btn btn-auto-secondary-outline ${cnames}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
