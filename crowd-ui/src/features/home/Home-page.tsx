import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/"><button type="button">Image Label Verification</button></Link>
      <Link to="/translationValidation"><button type="button">Translation Validation</button></Link>

    </div>

  );
}
