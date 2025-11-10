import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await api.get(`/properties`);
      const single = data.find((item) => item._id === id);
      setProperty(single);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p><strong>Price:</strong> ₹{property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Description:</strong> {property.description}</p>
      <p><strong>Owner:</strong> {property.owner?.name}</p>
    </div>
  );
}
