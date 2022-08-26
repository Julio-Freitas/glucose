import { InputHTMLAttributes } from "react";
import * as Style from "./styles";

type propsInput = {
  placeholder?: string;
};
const Input: React.FC<propsInput & InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <Style.Container>    
    <Style.Input  {...props} />
  </Style.Container>
);

export default Input;
