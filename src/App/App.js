import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";


function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail" element={<DetailPage/>}></Route>
      </Routes>
  );
}

export default App;
