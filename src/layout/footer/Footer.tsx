import { memo } from "react";
import clsx from "clsx";
import "./Footer.scss";

type Props = {
  isMainPage?: boolean;
};

const FooterComponent = ({ isMainPage }: Props) => (
  <footer
    className={clsx({
      "margin-top-4": isMainPage,
      "no-margin p-0": !isMainPage,
    })}
  >
    <span>
      <span className="red">❤</span> The best way to learn English
    </span>
  </footer>
);

const Footer = memo(FooterComponent);
export { Footer };
