import React from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import DesktopBar from "./TopBar/Desktop";
import SideBar from "./SideBar";

const Dashboard = (props) => (
  <div className="dashboard">
    <TopBar />
    <div className="container flex flex-column-gap-1">
      <SideBar />
      <div className="flex flex-d-column dashboard-desktop__bar"> {/* breaks mobile version */}
      <DesktopBar />
      {props.children}
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.element,
};

export default Dashboard;
