import {
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AlertState } from "types/alert";

type AlertContextType = {
  statusAlert: AlertState;
  setStatusAlert: React.Dispatch<SetStateAction<AlertState>>;
  hiddenAlert: (time: boolean) => void;
  delay?: number;
  progress:  number
  setDelay: React.Dispatch<SetStateAction<number>>
};

let interval: any = null;
export const AlertContext = createContext<AlertContextType>({
  statusAlert: { msg: "", hidden: false, type: "warn" },
  setStatusAlert: () => {},
  hiddenAlert: () => {},
  progress: 0,
  setDelay: () => {},

});

AlertContext.displayName = "alert-context";

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [statusAlert, setStatusAlert] = useState<AlertState>({
    msg: "",
    hidden: false,
    type: "sucess",
  });


  const [progress, setprogress] = useState(0);
  const [delay, setDelay] = useState(100);
  const delayref = (delay || 100) / 100;
  const { hidden } = statusAlert;

  useEffect(() => {
    if (hidden) {
      interval = setInterval(() => {
        setprogress((oldvalue) => {
          let newValue = oldvalue + 1;
          if (newValue >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newValue;
        });
      }, delayref);
    }
    setprogress(0);

    return () => clearInterval(interval);
  }, [hidden]);

  useEffect(() => {
    if (progress === 100) hiddenAlert(true);
  }, [progress]);

  const hiddenAlert = useCallback(
    (status: boolean) =>
      setStatusAlert({ msg: "", hidden: !status, type: "warn" }),
    []
  );
  return (
    <AlertContext.Provider value={{ statusAlert, setStatusAlert, hiddenAlert, progress, setDelay }}>
      {children}
    </AlertContext.Provider>
  );
};

export const UseAlertContext = () => {
  const { statusAlert, setStatusAlert, hiddenAlert, progress, setDelay } = useContext(AlertContext);

  const onSetStatusAlert = (args: AlertState) => {
    setStatusAlert(args);
  };

  return {
    statusAlert,
    onSetStatusAlert,
    hiddenAlert,
    progress,
    setDelay,
    setType
  };
};
