import { createContext, useContext } from "react";
import type { ModalState } from "./model";

export const ModalContext = createContext<ModalState | null>(null);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("");
  return ctx;
};

export default useModal;
