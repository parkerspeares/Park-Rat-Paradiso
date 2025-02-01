import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Ski Webstore</h1>
      <Link to="/shop">Shop Skis</Link>
    </div>
  );
};

export default Home;
