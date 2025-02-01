import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Ski {
  id: number;
  name: string;
  brand: string;
  price: number;
}

const Shop: React.FC = () => {
  const [skis, setSkis] = useState<Ski[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/skis')
      .then(response => setSkis(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Shop Skis</h1>
      <ul>
        {skis.map(ski => (
          <li key={ski.id}>
            <Link to={`/shop/${ski.id}`}>
              {ski.name} - ${ski.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;