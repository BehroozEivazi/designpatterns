import React from "react";
import { useToggler } from "./context";

interface Props {
  children: React.ReactNode;
}

export const ToggleLabel: React.FC<Props> = ({ children }) => {
  const { isOn } = useToggler();

  return <span className={`font-medium ${isOn ? "text-blue-600" : "text-gray-700"}`}>{children}</span>;
};
