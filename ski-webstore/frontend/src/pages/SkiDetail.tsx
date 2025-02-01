import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Ski {
  id: number;
  name: string;
  brand: string;
  price: number;
}

const SkiDetail: React.FC = () => {
  const { id } = useParams();
  const [ski, setSki] = useState<Ski | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/skis/${id}`)
      .then(response => setSki(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!ski) return <p>Loading...</p>;

  return (
    <div>
      <h1>{ski.name}</h1>
      <p>Brand: {ski.brand}</p>
      <p>Price: ${ski.price}</p>
    </div>
  );
};

export default SkiDetail;