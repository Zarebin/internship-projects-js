import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/"><button type="button">Image Label Verification</button></Link>
      <Link to="/foodFacts"><button type="button">Food Facts</button></Link>
    </div>
  );
}

export default Home;
