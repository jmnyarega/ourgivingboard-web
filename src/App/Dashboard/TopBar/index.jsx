import React, { useState } from "react";
import Logo from "../../../Assets/logo.png";

const TopBar = () => {
  const [open, setOpen] = useState("");
  const [header, setHeader] = useState(["header"]);
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
    <header className={header.join(" ")}>
      <div className={`overlay ${fade.join(" ")} `}></div>

      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={Logo} alt="Gifting" />
        </a>

        <a
          id="btnHamburger"
          onClick={handleClick}
          className="header__toggle hide-for-desktop"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="#">Home</a>
          <a href="#">Payment</a>
          <a href="#">My Boards</a>
          <a href="#">FAQ</a>
          <a href="/login">Log out</a>
        </div>
      </nav>

      <div className={`header__menu ${fade.join(" ")} `}>
        <a href="#">Home</a>
        <a href="#">Payment</a>
        <a href="#">My Boards</a>
        <a href="#">FAQ</a>
        <a href="/login">Log out</a>
      </div>
    </header>
  );
};

export default TopBar;
