export const PrimaryBtn = ({
  children,
  cnames,
  type = "button",
  disable,
  onClick,
}) => {
  return (
    <button
      className={`btn btn-auto-primary ${cnames}`}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
