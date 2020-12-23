import React from "react";
import Links from "../TopBar/Links";

const SideBar = () => (
  <aside className="hide-for-mobile sidebar">
    <div className="sidebar-link-wrapper">
      <input
        type="search"
        placeholder="Start typing to search..."
        className="element-search"
      />
      <Links classes="sidebar-link" />
    </div>
  </aside>
);

export default SideBar;
