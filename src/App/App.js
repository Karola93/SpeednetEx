import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";
import Layout from "./components/layout/Layout";


function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/detail" element={<DetailPage/>}></Route>
          </Routes>
      </Layout>

  );
}

export default App;
