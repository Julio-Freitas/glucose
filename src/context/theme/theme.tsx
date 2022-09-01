import { useReducer } from "react";
import { ContextTheme } from "./contextTheme";
import RedurcerTheme from "./reducer";

type Theme = {
  children: React.ReactNode;
};
export const ProviderTheme = ({ children }: Theme) => {
  const [state, dispatch] = useReducer(RedurcerTheme, { title: "" });

  return <ContextTheme.Provider value={{ state, dispatch }}>{children}</ContextTheme.Provider>;
};

