import * as Style from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <Style.Header>
      <Style.Navigation role="navigation">
        <Style.Input type="checkbox" id="post" />
        <Style.Label htmlFor="post" />    
        <Style.Ul>
          <Style.Li className="text">
            <Link href="/">Created</Link>
          </Style.Li>
          <Style.Li className="quote">
            <Link href="/">Read</Link>
          </Style.Li>
          <Style.Li className="quote">
            <Link href="/">Edit</Link>
          </Style.Li>
          

        </Style.Ul>
      </Style.Navigation>
    </Style.Header>
  );
};

export default Header;
