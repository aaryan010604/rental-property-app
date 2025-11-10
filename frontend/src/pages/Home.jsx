import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/properties");
      setProperties(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Available Properties</h2>
      {properties.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
