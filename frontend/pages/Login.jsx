import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${api}/users/login`, {
      username,
      password,
    });
    if (res.data.error) {
      return alert(res.data.error);
    }

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      alert(res.data.message);
      navigate("/dashboard");
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h1>Login</h1>
        <input
          onChange={handleUsername}
          value={username}
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="Enter password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
