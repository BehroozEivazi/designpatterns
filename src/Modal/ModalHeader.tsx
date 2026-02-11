import type { FC } from "react";
import type React from "react";
import useModal from "./context";

interface Props {
  children?: React.ReactNode;
}
const ModalHeader: FC<Props> = ({ children }) => {
  const { visible } = useModal();
  return <div className={visible ? "active" : ""}>{children}</div>;
};

export default ModalHeader;
