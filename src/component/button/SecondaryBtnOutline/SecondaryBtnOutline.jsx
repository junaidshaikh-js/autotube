export const SecondaryBtnOutline = ({
  children,
  cnames,
  type = "button",
  onClick,
  disable,
}) => {
  return (
    <button
      className={`btn btn-auto-secondary-outline ${cnames}`}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};
