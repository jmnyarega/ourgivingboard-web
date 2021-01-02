import React, { useState } from "react";
import Logo from "../../../common/Logo";
import Links from "./Links";

const TopBar = () => {
  const [open, setOpen] = useState("");
  const [header, setHeader] = useState(["header hide-for-desktop"]);
  const [fade, setFade] = useState(["has-fade"]);

  const handleClick = () => {
    let headerClasses = header;
    let fadeClasses = header;
    if (open) {
      headerClasses = header.filter((cls) => cls !== "open");
      fadeClasses = fade.filter((cls) => cls !== "fade-in").concat("fade-out");
      setOpen("");
    } else {
      headerClasses = [...header, "open"];
      fadeClasses = fade.filter((cls) => cls !== "fade-out").concat("fade-in");
      setOpen("open");
    }
    setFade(fadeClasses);
    setHeader(headerClasses);
  };

  return (
    <header>
      <div className={header.join(" ")}>
        <div className={`overlay ${fade.join(" ")} `}></div>
        <nav className="container container--pall flex flex-jc-sb flex-ai-c">
          <a href="/" className="header__logo">
            <Logo />
          </a>
          <a id="btnHamburger" onClick={handleClick} className="header__toggle">
            <span />
            <span />
            <span />
          </a>
        </nav>
        <Links classes={`header__menu ${fade.join(" ")} `} />
      </div>
    </header>
  );
};

export default TopBar;
