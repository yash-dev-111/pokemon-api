import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { Layout } from "antd";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleCollapsed = () => {
    if (window.screen.width <= 768) {
      setOpen(!open);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="dashboard">
      <Layout>
        <Navigation collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Sidebar
          collapsed={collapsed}
          onClose={onClose}
          open={open}
          toggleCollapsed={toggleCollapsed}
        />
      </Layout>
    </div>
  );
};

export default Dashboard;
