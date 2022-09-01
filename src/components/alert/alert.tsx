import { useEffect, useState } from "react";
import * as Styled from "./style";


type AlertProps = {
  delay?: number;
  hiddenAlert: (time: boolean) => void;
  msg: string;
  hidden: boolean;
  type: "sucess" | "error" | "warn";
};

const Alert: React.FC<AlertProps> = ({
  delay,
  hiddenAlert,
  msg,
  hidden,
  type,
}) => {
  const [progress, setprogress] = useState(0);
  const delayref = (delay || 100) / 100;

  useEffect(() => {
    if (hidden) {
      const interval = setInterval(() => {
        setprogress((oldvalue) => {
          let newValue = oldvalue + 1;
          if (newValue >= 100) {
            clearInterval(interval);
            hiddenAlert(true);
            return 100;
          }
          return newValue;
        });
      }, delayref);
      return;
    }
    setprogress(0);
  }, [hidden]);

  return (
    <Styled.ContainerAlert type={type} hidden={hidden}>
      <Styled.Progress width={`${progress}%`} />
      <Styled.Context>
        <Styled.Text>{msg}</Styled.Text>
      </Styled.Context>
    </Styled.ContainerAlert>
  );
};
export default Alert;
