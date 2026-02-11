import type { FC } from "react";
import type React from "react";
import useModal from "./context";

interface Props {
  children?: React.ReactNode;
}
const ModalFooter: FC<Props> = ({ children }) => {
  const { visible, onToggle } = useModal();
  return (
    <div className={visible ? "active" : ""}>
      {children}
      <button
        onClick={() => {
          onToggle(false);
        }}
      >
        close modal
      </button>
    </div>
  );
};

export default ModalFooter;
