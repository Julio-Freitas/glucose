import styled, { keyframes, css } from "styled-components";

enum AlertColors {
  sucess = "#63e6be",
  error = "#d9480f",
  warn = "#fab00",
}

type AlertAttr = {
  type: keyof typeof AlertColors;
};

const progressWidth = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const ContainerAlert = styled.div<AlertAttr>`
  position: fixed;
  right: 10px;
  display: flex;
  padding: 10px 15px;
  border-radius: 0 0 5px 5px;
  max-width: 305px;
  background-color: ${({ type }) => AlertColors[type]};
  box-shadow: 0 0.25rem 0.3rem #120125;
  visibility: ${({ hidden }) => (hidden ? `hidden` : "visible")};
`;

export const Context = styled.div``;

export const Text = styled.div`
  color: #fff;
  font-size: 14px;
`;

type DelayProps = {
  time: string;
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
    background-color: red;
    height: 100%;
    animation: ${({ time }) =>
      time
        ? css`
            ${progressWidth} ${time}  linear forwards
          `
        : ""};
  }
`;
