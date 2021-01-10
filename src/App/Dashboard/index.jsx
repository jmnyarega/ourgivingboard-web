import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import DesktopBar from "./TopBar/Desktop";
import SideBar from "./SideBar";
import { getEmail } from "../../helpers/localStorage";

const Dashboard = (props) => {
  const history = useHistory();
  const email = getEmail();
  if (!email) {
    history.push("/");
  }
  return (
    <div className="dashboard">
      <TopBar />
      <div className="container flex flex-column-gap-1">
        <SideBar />
        <div className="flex flex-d-column dashboard-desktop__bar">
          <DesktopBar />
          {props.children}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.any,
};

export default Dashboard;
