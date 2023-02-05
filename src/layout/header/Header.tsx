import { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./Header.scss";

type Props = {
  isMainPage?: boolean;
};

const HeaderComponent = ({ isMainPage }: Props) => (
  <div className={clsx("header", { "conent-left": !isMainPage })}>
    <Link to="/" className="d-flex align-items-center justify-content-center text-decoration-none">
      <img src="https://exampledia.github.io/demo/dist/logo.png" className="logo exampledia" alt="Exampledia logo" />
      <h1>xampledia</h1>
    </Link>
  </div>
);

const Header = memo(HeaderComponent);
export { Header };
