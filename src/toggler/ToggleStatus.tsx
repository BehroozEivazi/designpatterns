import { useToggler } from "./context";

export const ToggleStatus: React.FC = () => {
  const { isOn } = useToggler();

  return <span>{isOn ? "Enabled" : "Disabled"}</span>;
};
