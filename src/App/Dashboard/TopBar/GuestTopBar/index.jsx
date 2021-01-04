import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../common/Logo";

const GuestTopBar = () => (
  <header className="header">
    <nav className="container container--pall flex flex-jc-sb flex-ai-c">
      <Link to="#" className="header__logo">
        <Logo />
      </Link>
    </nav>
  </header>
);

export default GuestTopBar;
