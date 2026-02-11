import { createContext, useContext } from "react";

interface TogglerContextValue {
  isOn: boolean;
  toggle: () => void;
}

export const TogglerContext = createContext<TogglerContextValue | null>(null);

export function useToggler() {
  const ctx = useContext(TogglerContext);

  if (!ctx) {
    throw new Error("Toggle compound components must be used inside <Toggle />");
  }

  return ctx;
}
