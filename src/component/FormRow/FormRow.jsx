import { Label } from "../Label/Label";

export const FormRow = ({ id, labelText, inputType, placeholder }) => {
  return (
    <div>
      <Label to={id} text={labelText} />
      <input
        type={inputType}
        className="form-field my-sm p-sm w-100"
        placeholder={placeholder}
        id={id}
        required
      />
    </div>
  );
};
