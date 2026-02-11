import React from "react";
import { TogglerContext } from "./context";

export interface ToggleRootProps {
  children: React.ReactNode;
  onChange?: (isOn: boolean) => void;
  defaultOn?: boolean;
}

type ToggleStatics = {
  Button: React.FC;
  Label: React.FC<{ children: React.ReactNode }>;
  Status: React.FC;
};

export type ToggleComponent = React.FC<ToggleRootProps> & ToggleStatics;

const ToggleRoot: React.FC<ToggleRootProps> = ({ children, defaultOn = false, onChange }) => {
  const [isOn, setIsOn] = React.useState(defaultOn);

  const toggle = () => {
    setIsOn((prev) => !prev);
    onChange?.(!isOn);
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
      <TogglerContext.Provider value={{ isOn, toggle }}>{children}</TogglerContext.Provider>
    </div>
  );
};

// 👇 اینجا cast می‌کنیم به compound component
const Toggle = ToggleRoot as ToggleComponent;

export default Toggle;
