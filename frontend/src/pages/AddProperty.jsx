import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function AddProperty() {
  const [form, setForm] = useState({ title: "", price: "", location: "", description: "" });
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/properties", form, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    alert("Property added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">Add</button>
    </form>
  );
}
