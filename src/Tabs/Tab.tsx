import React, { useState } from "react";
import { Provider } from "./context";

interface TabRootProps {
  children?: React.ReactNode;
}
interface TabStatistic {
  Panel: React.FC<{ children?: React.ReactNode; tabKey: string }>;
  Content: React.FC<{ children?: React.ReactNode; tabKey: string }>;
}
export type TabComponent = React.FC<TabRootProps> & TabStatistic;

const TabRoot: React.FC<TabRootProps> = ({ children }) => {
  const [key, setKey] = useState<string>("");
  const onChange = (key: string) => {
    setKey(key);
  };
  return (
    <Provider activeKey={key} onChange={onChange}>
      {children}
    </Provider>
  );
};

const Tab = TabRoot as TabComponent;
export default Tab;
