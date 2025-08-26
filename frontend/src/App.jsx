import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminRoutes from "./components/AdminRoutes";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <AdminDashboard />
            </AdminRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
