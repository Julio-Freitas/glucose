
import { createContext } from "react";
type State = { title: string};
type Action = { type: 'getTheme'};
type Dispatch= (action: Action) => void;
type ContexTheme = { state: State, dispatch: Dispatch};

export const ContextTheme = createContext<ContexTheme | undefined>(undefined);