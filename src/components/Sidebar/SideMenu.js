import React from "react";
import { Menu } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideMenu = ({ selectedKey }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      width={250}
      className="sidebar-menu sidebar-mobile-menu"
      defaultSelectedKeys={[selectedKey]}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<HomeOutlined />}>
        <Link to="#">Home Page</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to="#">Dummy Page</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
