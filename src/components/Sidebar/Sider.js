import React from "react";
import { Layout } from "antd";
import SideMenu from "./SideMenu";
import Pages from "../Pages/Pages";

const Sider = ({ collapsed }) => {
  const { Sider } = Layout;

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
          <SideMenu selectedKey="1" />
        </Sider>
        <Pages />
      </Layout>
    </>
  );
};

export default Sider;
