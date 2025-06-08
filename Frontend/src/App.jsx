import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Views/Pages/HomePage.jsx";
import EmployePage from "./Views/Pages/EmployePage.jsx";
import StatisticsPage from "./Views/Pages/StatisticsPage.jsx";
import Navbar from "./Views/Components/NavBar.jsx";
import React from "react";


function App() {
  return <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/EmployeLists" element={<EmployePage/>} />
          <Route path="/Balance" element={<StatisticsPage/>} />

      </Routes>
  </BrowserRouter>
}

export default App
