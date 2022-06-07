import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/">
        <button type="button">Image Label Verification</button>
      </Link>
      <Link to="/counter">
        <button type="button">Counter</button>
      </Link>
      <Link to="/sentiment">
        <button type="button">Sentiment</button>
      </Link>
    </div>
  );
}

export default Home;
