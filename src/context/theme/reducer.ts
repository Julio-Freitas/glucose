type State = { title: string };
type Action = { type: "getTheme" | ""};

const INITAL_STATE = {
  title: "",
};

export default function RedurcerTheme(
  state: State = INITAL_STATE,
  action: Action
) {
  switch (action.type) {
    case "getTheme":
      return { ...state, title: "Julio Cesar Lemos" };
    default:
      return INITAL_STATE;
  }
}