import { useState , useEffect, useRef} from "react";
import { FaFilter } from "react-icons/fa";
import * as Styles from "./style";
type DropdownProps = {
  optionSelected: (value: string) => void;
  className?: string
};

const options = [
  {
    value: "all",
    text: "Todos",
  },
  {
    value: "last-3-week",
    text: "Últimas 3 semanas",
  },
];
const DropdownMenu: React.FC<DropdownProps> = ({ optionSelected, className = "" }) => {
  const [dropdown, setDropdown] = useState(false);
  const [option, setOption] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);


  useEffect(()=> {
    const handler= (event: any ) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
       }
    }

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
     }; 

  },[dropdown])

  const _handleSelectedOption = (value: string) => {
    setOption(value);
    optionSelected(value);
  };

  return (
    <Styles.NavigationDropdown tabIndex={0} ref={ref} className={className}>
      <Styles.Button
        onClick={() => setDropdown((prev) => !prev)}
        type="button"
        aria-expanded={dropdown ? "true" : "false"}
      >
      <FaFilter />  Filtrar Por
      </Styles.Button>

      <Styles.Select dropdown={dropdown}>
        {options.map(({ value, text }) => (
          <Styles.Option
            selected={value === option}
            onClick={() => _handleSelectedOption(value)}
            key={value}
          >
            {text}
          </Styles.Option>
        ))}
      </Styles.Select>
    </Styles.NavigationDropdown>
  );
};

export default DropdownMenu;
