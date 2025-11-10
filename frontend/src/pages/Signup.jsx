import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/auth/register", form);
    login(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
