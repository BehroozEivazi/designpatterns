// src/components/Toggle/index.tsx
import Toggle from "./Toggle";
import { ToggleLabel } from "./ToggleLabel";
import { ToggleButton } from "./ToggleButton";
import { ToggleStatus } from "./ToggleStatus";

Toggle.Button = ToggleButton;
Toggle.Status = ToggleStatus;
Toggle.Label = ToggleLabel;
export default Toggle;
