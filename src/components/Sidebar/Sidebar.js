import { Layout } from "antd";
import "./sidebar.css";
import DrawerSlide from "./DrawerSlide.js";
import Sider from "./Sider";

const Sidebar = ({ collapsed, showDrawer, onClose, toggleCollapsed, open }) => {
  console.log("open: ", open);
  return (
    <>
      <Layout className="sidebar-layout">
        <Sider collapsed={collapsed} />
        <div className="mobile-menu">
          <DrawerSlide
            collapsed={collapsed}
            showDrawer={showDrawer}
            onClose={onClose}
            toggleCollapsed={toggleCollapsed}
            open={open}
          />
        </div>
      </Layout>
    </>
  );
};

export default Sidebar;
