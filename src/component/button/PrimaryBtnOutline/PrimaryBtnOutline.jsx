export const PrimaryBtnOutline = ({
  children,
  cnames,
  type = "button",
  onClick,
  disable,
}) => {
  return (
    <button
      className={`btn btn-auto-primary-outline ${cnames}`}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};
