import React from "react";
import { TabName, useContext } from "./context";

interface Props {
  children?: React.ReactNode;
  tabKey: string;
}
const TabContent: React.FC<Props> = ({ children, tabKey }) => {
  const { activeKey } = useContext(TabName);
  return <div className={tabKey === activeKey ? "active" : ""}>{children}</div>;
};

export default TabContent;
