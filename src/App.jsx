import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductById from "./pages/ProductById";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Purchases from "./pages/Purchases";
import LoginScreen from "./pages/LoginScreen";
import Header from "./components/shared/Header";
import "./styles/App.css";
import SignUpScreen from "./pages/SignUpScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductById />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
