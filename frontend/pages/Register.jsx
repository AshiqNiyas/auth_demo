import React from "react";
import { useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${api}/users/register`, {
      username,
      password,
    });
    alert(res.data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h1>Register new account</h1>
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
