import React from "react";
import { ContextProvider, useAccordianContext } from "./AccordianContext";

export const Accordian = ({ children }) => {
  return (
    <ContextProvider>
      <div>{children}</div>
    </ContextProvider>
  );
};

export const AccordianPanel = ({ children, id }) => (
  <div style={{ textAlign: "left", padding: "4px", border: "1px solid black" }}>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, { id });
    })}
  </div>
);

export const AccordianHeading = ({ children, id }) => {
  const { setActivePanel } = useAccordianContext();
  return (
    <div
      onClick={() => setActivePanel(id)}
      style={{ padding: "4px", backgroundColor: "#cee", fontWeight: "800" }}
    >
      {children}
    </div>
  );
};

export const AccordianContent = ({ children, id }) => {
  const { activePanel } = useAccordianContext();
  console.log({ activePanel });
  if (activePanel !== id) return null;
  return <div style={{ padding: "4px" }}>{children}</div>;
};
