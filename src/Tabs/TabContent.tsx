import React from "react";
import { useTabs } from "./context";

interface Props {
  children?: React.ReactNode;
  tabKey: string;
}
const TabContent: React.FC<Props> = ({ children, tabKey }) => {
  const { activeKey } = useTabs();

  return <div className={tabKey === activeKey ? "active" : ""}>{children}</div>;
};

interface Props {
  children?: React.ReactNode;
}
export default TabContent;
