import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const api = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${api}/products`,
        { name, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${api}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h2>Add product</h2>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter product name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Enter product price"
        />
        <button>Submit</button>
      </form>

      <div>
        {products?.map((x) => {
          return <p key={x.id}>{x.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
