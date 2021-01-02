import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../Assets/logo.png";

const GuestTopBar = () => (
  <header className="header">
    <nav className="container container--pall flex flex-jc-sb flex-ai-c">
      <Link to="/home" className="header__logo">
        <img src={Logo} alt="Gifting" />
      </Link>
    </nav>
  </header>
);

export default GuestTopBar;
