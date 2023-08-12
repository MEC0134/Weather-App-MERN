import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserSettings from "./pages/UserSettings";


function App() {

  return (
    <div className="App">

      <Header />

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/userSettings" element={<UserSettings/>}></Route>
        </Routes>

      <Footer />

    </div>
  );
}

export default App;
