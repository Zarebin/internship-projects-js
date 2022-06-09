import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/imageLabelVerification">
      <button type="submit">Image Label Verification</button>
    </Link>
    <Link to="/counter">
      <button type="submit">Counter</button>
    </Link>
  </div>
);

export default Home;
