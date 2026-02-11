import React, { type FC } from "react";
import { ModalContext } from "./context";
interface ModalRootProps {
  children?: React.ReactNode;
  open: boolean;
  onVisible: (open: boolean) => void;
}
interface ModalProps {
  Content: React.FC<{ children?: React.ReactNode }>;
  Header: React.FC<{ children?: React.ReactNode }>;
  Footer: React.FC<{ children?: React.ReactNode }>;
}

type ModalTypeComponent = React.FC<ModalRootProps> & ModalProps;
const ModalRoot: FC<ModalRootProps> = ({ children, open, onVisible }) => {
  const onToggle = (value: boolean) => {
    onVisible?.(value);
  };
  return (
    <div className={open ? "IsOpen" : ""}>
      <ModalContext.Provider value={{ visible: open, onToggle }}>{children}</ModalContext.Provider>
    </div>
  );
};
const Modal = ModalRoot as ModalTypeComponent;
export default Modal;
