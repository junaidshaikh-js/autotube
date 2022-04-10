export const PrimaryBtn = ({ children, cnames, type = "button", disable }) => {
  return (
    <button
      className={`btn btn-auto-primary ${cnames}`}
      type={type}
      disabled={disable}
    >
      {children}
    </button>
  );
};
