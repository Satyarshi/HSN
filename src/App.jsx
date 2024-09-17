import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import Hsn from "./views/Hsn";
import Ifsc from "./views/Ifsc";
import HsnPage from "./views/HsnPage";
import "./App.css";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const App = () => {
  const location = useLocation();

  // Determine if the current path is "/hsn"
  const isHsnPage = location.pathname === "/hsn";

  return (
    <Layout className="mainLayout">
      {!isHsnPage && (
        <Header>
          <AppHeader />
        </Header>
      )}
      <Content>
        <Routes>
          <Route path="/" element={<Hsn />} />
          <Route path="/ifsc" element={<Ifsc />} />
          <Route path="/hsn" element={<HsnPage />} />
        </Routes>
      </Content>
      {!isHsnPage && <Footer></Footer>}
    </Layout>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
