import { createContext } from "@/context";
import type { TabState } from "./model";
export const TabName = "Tabs";
const [Provider, useContext] = createContext<TabState>(TabName);
export { Provider, useContext };
