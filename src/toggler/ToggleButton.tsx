import { useToggler } from "./context";

export const ToggleButton: React.FC = () => {
  const { isOn, toggle } = useToggler();

  return (
    <button onClick={toggle} className={`px-4 py-2 rounded ${isOn ? "bg-blue-600 text-white" : "bg-gray-400 text-white"}`}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};
