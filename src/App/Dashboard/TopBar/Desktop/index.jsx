import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DesktopBar = () => (
  <div className="desktop-bar hide-for-mobile">
    <Avatar
      className="dashboard-desktop__bar-bell"
      shape="circle"
      size="medium"
      icon={<UserOutlined />}
    />
    <Avatar
      className="dashboard-desktop__bar-bell"
      shape="circle"
      size="medium"
      icon={<UserOutlined />}
    />
  </div>
);

export default DesktopBar;
