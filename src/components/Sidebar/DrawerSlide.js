import React from "react";
import { Button, Drawer, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SideMenu from "./SideMenu";

const DrawerSlide = ({onClose, toggleCollapsed, open }) => {
  return (
    <Drawer
      placement="left"
      onClick={toggleCollapsed}
      open={open}
      width={290}
      extra={
        <Space>
          <img
            src="./images/logo.png"
            alt=""
            className="sidebar-mobile"
          />
          <Button onClick={onClose}>
            <ArrowLeftOutlined />
          </Button>
        </Space>
      }
    >
      <SideMenu selectedKey="1" />
    </Drawer>
  );
};

export default DrawerSlide;
