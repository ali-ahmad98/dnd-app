import React, { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "antd/dist/antd.css";
import "./App.css";

// Import Components
import BookingPage from "./components/BookingPage/BookingPage";
import Navbar from "./components/Common/Navbar";

// Import Antd
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

// Main Component: App
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            BookingPage
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Page2
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 15 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: React.useCallback(() => setCollapsed(!collapsed)),
            }
          )}
          <Navbar />
        </Header>
        <Content className="site-layout-background">
          <BookingPage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
