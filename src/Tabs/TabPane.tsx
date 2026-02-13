import type { FC } from "react";
import { TabName, useContext } from "./context";
interface Props {
  tabKey: string;
  children?: React.ReactNode;
}
const TabPane: FC<Props> = ({ tabKey, children }) => {
  const { activeKey, onChange } = useContext(TabName);
  return (
    <div className={tabKey === activeKey ? "active" : ""} onClick={() => onChange(tabKey)}>
      {children}
    </div>
  );
};

export default TabPane;
