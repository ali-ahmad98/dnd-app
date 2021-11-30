import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "antd/dist/antd.css";
import "./App.css";

// Import Components
import Navbar from "./components/Common/Navbar";
import BookingPage from "./components/BookingPage/BookingPage";
import Page2 from "./components/Page2/Page2";

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
    <Router>
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
          <Header
            className="site-layout-background"
            style={{ paddingLeft: 15 }}
          >
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
            <Routes>
              <Route path="/" element={<BookingPage />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
