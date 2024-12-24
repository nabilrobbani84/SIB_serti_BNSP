import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle.jsx";
import HomePage from "./Page/HomePage";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter> {/* Tambahkan BrowserRouter di sini */}
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
