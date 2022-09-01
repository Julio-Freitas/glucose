import styled  from "styled-components";

export enum AlertColors {
  sucess = "#16a77a",
  error = "#d9480f",
  warn = "#f59900",
}

export type AlertAttr = {
  type: keyof typeof AlertColors;
};

export const ContainerAlert = styled.div<AlertAttr>`
  position: fixed;
  right: 10px;
  display: flex;
  padding: 10px 15px;
  border-radius: 0 0 5px 5px;
  max-width: 305px;
  background-color: ${({ type }) => AlertColors[type]};
  box-shadow: 0 0.25rem 0.3rem #120125;
  visibility: ${({ hidden }) => (hidden ? "visible" : "hidden")};
`;

export const Context = styled.div``;

export const Text = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 3px;
`;

type DelayProps = {
    width: string;
};
export const Progress = styled.div<DelayProps>`
  position: absolute;
  left: 0;
  top: -5px;
  width: 100%;
  height: 5px;
  background-color: #ccc;
  border-radius: 5px 5px 0 0;

  ::after {
    content: "";
    display: block;
    background-color: #212121;
    height: 100%;
    transition: width ease-in-out 0.05s;
    width: ${({width}) => width || 0} ;
  }
`;
