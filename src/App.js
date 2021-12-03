import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "antd/dist/antd.css";
import "./App.css";

// Import Components
import Navbar from "./components/Common/Navbar";
import BookingPage from "./components/TradeBlotterPage/TradeBlotterPage";
import Page2 from "./components/Page2/Page2";

// Import Antd
import { Layout } from "antd";
const { Header, Content } = Layout;

// Main Component: App
const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Header>
            <Navbar />
          </Header>
          <Content className="site-layout-background">
            <Routes>
              <Route path="/" element={<BookingPage />} />
              <Route exact path="/page2" element={<Page2 />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
