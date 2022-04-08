export const PrimaryBtn = ({ children, cnames }) => {
  return (
    <button
      className={`btn btn-primary ${cnames}`}
      style={{
        marginRight: "1rem",
      }}
    >
      {children}
    </button>
  );
};
