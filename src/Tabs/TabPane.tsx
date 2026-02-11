import type { FC } from "react";
import { useTabs } from "./context";
interface Props {
  tabKey: string;
  children?: React.ReactNode;
}
const TabPane: FC<Props> = ({ tabKey, children }) => {
  const { activeKey, onChange } = useTabs();
  return (
    <div className={tabKey === activeKey ? "active" : ""} onClick={() => onChange(tabKey)}>
      {children}
    </div>
  );
};

export default TabPane;
