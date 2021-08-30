import { createContext, useContext, useState } from "react";

const context = createContext(null);
export const useAccordianContext = () => {
  if (!context) {
    throw new Error("call within accordian context");
  }
  return useContext(context);
};

export const ContextProvider = ({ children }) => {
  const [activePanel, setActivePanel] = useState(0);
  const { Provider } = context;
  const value = {
    activePanel,
    setActivePanel
  };
  return <Provider value={value}>{children}</Provider>;
};
