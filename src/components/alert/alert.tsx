import { useEffect, useState } from "react";
import * as Styled from "./style";

type AlertProps = { delay?: number; hiddenAlert: (time: boolean) => void };

const Alert: React.FC<AlertProps> = ({ delay, hiddenAlert }) => {
  const [counter, setCounter] = useState((delay || 1000) / 1000);

  useEffect(() => {
    const timeId =
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

      if(counter === 0 ) {
        hiddenAlert(true)
      }
    return () => {
      timeId ? clearTimeout(timeId) : null;
    };
  }, [counter]);

  return (
    <Styled.ContainerAlert type="sucess" hidden={counter === 1}>
      <Styled.Progress time={`${counter}s`} />
      <Styled.Context>
        <Styled.Text>
          Os campo date, hora ou glicemia devem ser preenchidos!
        </Styled.Text>
      </Styled.Context>
    </Styled.ContainerAlert>
  );
};
export default Alert;
