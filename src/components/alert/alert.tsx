import React, { useEffect } from "react";
import { UseAlertContext } from "context/alert/context";
import * as Styled from "./style";

type AlertProps = {
  delay?: number;
};

const Alert: React.FC<AlertProps> = ({ delay = 1000 }) => {
  const { statusAlert, progress, setDelay } = UseAlertContext();
  const { msg, hidden, type } = statusAlert;

  useEffect(() => {
    setDelay(delay);
  }, [delay]);

  return (
    <Styled.ContainerAlert type={type || "sucess"} hidden={hidden}>
      <Styled.Progress width={`${progress}%`} />
      <Styled.Context>
        <Styled.Text>{msg}</Styled.Text>
      </Styled.Context>
    </Styled.ContainerAlert>
  );
};
export default React.memo(Alert);
