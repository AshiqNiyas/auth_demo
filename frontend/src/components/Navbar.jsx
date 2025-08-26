import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/");
  };
  return (
    <div>
      {token && (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
