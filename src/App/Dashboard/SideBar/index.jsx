import React from "react";
import Links from "../TopBar/Links";
import Logo from "../../../Assets/logo.png";

const SideBar = () => (
  <aside className="hide-for-mobile sidebar">
    <div className="sidebar-link-wrapper">
      <img src={Logo} />
      <input
        type="search"
        placeholder="Search..."
        className="element-search search-input"
      />
      <Links
        classes="sidebar-link"
        icons={[
          "tachometer",
          "credit-card",
          "users",
          "question-circle",
          "sign-out",
        ]}
      />
    </div>
  </aside>
);

export default SideBar;
