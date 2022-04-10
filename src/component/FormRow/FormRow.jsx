import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const FormRow = ({
  id,
  labelText,
  inputType,
  placeholder,
  value,
  onChange,
  inputError,
  isVisible,
  onShowPassword,
}) => {
  return (
    <div>
      <label htmlFor={id} className="form-label  field-required">
        {labelText}
      </label>

      {inputType !== "password" ? (
        <input
          type={inputType}
          className="form-field my-sm p-sm w-100"
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <div className="input-icon">
          <input
            type={isVisible ? "text" : "password"}
            className="form-field my-sm p-sm w-100"
            placeholder="**************"
            id={id}
            value={value}
            onChange={onChange}
            required
          />

          <span
            className="show-password-icon-container"
            onClick={onShowPassword}
          >
            {isVisible ? (
              <i className="fas fa-eye"></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </span>
        </div>
      )}

      {inputError && <ErrorMessage text={inputError} />}
    </div>
  );
};
