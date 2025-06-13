import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import HomePage from "./Views/Pages/HomePage.jsx";
import EmployePage from "./Views/Pages/EmployePage.jsx";
import StatisticsPage from "./Views/Pages/StatisticsPage.jsx";
import Navbar from "./Views/Components/NavBar.jsx";
import LoginPage from "./Views/Pages/LoginPage.jsx";


function App() {
    const [ValidLogin, setValidLogin] = useState(false) //désolé pour la structure mais ça prendra un peu du temps di ' j' ai fais quelquechose de plus sécurisé

  return <BrowserRouter>
      { ValidLogin && <Navbar/>}

      <Routes>
          <Route path="/" element={<LoginPage onLogin={setValidLogin} />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/EmployeLists" element={<EmployePage/>} />
          <Route path="/Balance" element={<StatisticsPage/>} />

      </Routes>
  </BrowserRouter>
}

export default App
