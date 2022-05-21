import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Toast = ({ type, message }) => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    setIsToastVisible(true);

    const id = setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [message]);

  return (
    <>
      {isToastVisible && message ? (
        <div className="toast-container flex flex-center">
          <div className={`toast toast-${type} txt-bold  flex flex-center`}>
            {type == "success" ? <FaCheckCircle /> : <FaInfoCircle />}
            <span className="ml-1">{message}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};
