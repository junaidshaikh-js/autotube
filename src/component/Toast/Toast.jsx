import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export const Toast = ({ type, message }) => {
  if (message) {
    return (
      <div className="toast-container flex flex-center">
        <div className={`toast toast-${type} txt-bold  flex flex-center`}>
          {type == "success" ? <FaCheckCircle /> : <FaInfoCircle />}
          <span className="ml-1">{message}</span>
        </div>
      </div>
    );
  }

  return null;
};
