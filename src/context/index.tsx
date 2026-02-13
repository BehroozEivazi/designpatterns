import React from "react";

function createContext<ContextValueType extends object>(rootComponentName: string, defautlContext?: ContextValueType) {
  const Context = React.createContext<ContextValueType | undefined>(defautlContext);
  Context.displayName = rootComponentName;

  const Provider: React.FC<ContextValueType & { children: React.ReactNode }> = (props) => {
    const { children, ...context } = props;

    const value = React.useMemo(() => context, [context]) as ContextValueType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = (consumerName: string) => {
    const ctx = React.useContext(Context);
    if (ctx) return ctx;
    if (defautlContext !== undefined) return defautlContext;

    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  };
  return [Provider, useContext] as const;
}

export { createContext };
