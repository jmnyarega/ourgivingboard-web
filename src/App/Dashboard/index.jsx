import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";

const Dashboard = (props) => (
  <div className="dashboard">
    <TopBar />
    <div className="container flex flex-column-gap-6">
      <SideBar />
      {props.children}
    </div>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.element,
};

export default Dashboard;
