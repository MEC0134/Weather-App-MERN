import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Tutorial: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtosetuptheprojectenvironment

function App() {

  return (
    <div className="App">

      <Header />

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

      <Footer />

    </div>
  );
}

export default App;
