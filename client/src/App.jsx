import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;