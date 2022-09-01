import { ButtonHTMLAttributes, ReactNode } from "react";
import * as Style from "./styles";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>;

type propsButton = {
  text?: string;
  width?: string;
  icon?: ReactNode ;
  height?: string
};
const Input: React.FC<propsButton & TypeButton> = (props) => (
  <Style.Button width={props.width} height={props?.height} {...props}>
    {props.icon ? props.icon : null}
    {props.text || "Text button"}
  </Style.Button>
);

export default Input;
