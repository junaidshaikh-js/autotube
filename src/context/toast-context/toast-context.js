import { createContext, useContext, useState, useEffect } from "react";

const initialValue = {
  type: "",
  message: "",
  id: Date.now(),
};

const ToastContext = createContext(initialValue);

const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(initialValue);

  const value = { toastMessage, setToastMessage };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
