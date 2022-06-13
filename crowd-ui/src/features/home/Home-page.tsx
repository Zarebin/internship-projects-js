import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/imageLabelVerification">
      <button type="button">Image Label Verification</button>
    </Link>
  </div>
);

export default Home;
