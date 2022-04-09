export const Label = ({ to, text }) => {
  return (
    <label htmlFor={to} className="form-label  field-required">
      {text}
    </label>
  );
};
