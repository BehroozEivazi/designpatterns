import React from "react";
import type { TabState } from "./model";

export const TabsContext = React.createContext<TabState | null>(null);

export function useTabs() {
  const ctx = React.useContext(TabsContext);

  if (!ctx) throw new Error("Tabs compound components must be used inside <Tabs />");
  return ctx;
}
