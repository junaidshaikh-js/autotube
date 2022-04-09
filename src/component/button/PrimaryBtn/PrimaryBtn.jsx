export const PrimaryBtn = ({ children, cnames, type = "button" }) => {
  return (
    <button
      className={`btn btn-auto-primary ${cnames}`}
      style={{
        marginRight: "1rem",
      }}
      type={type}
    >
      {children}
    </button>
  );
};
