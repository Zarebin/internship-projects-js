import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <button type="button" id="back" aria-label="back">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293l-1.414-1.414L4.586 12l6.707 6.707z" /></svg>
      </button>
      <button type="button" id="menu" aria-label="menu">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <circle cx="16" cy="8" r="2" fill="gray" />
          <circle cx="16" cy="16" r="2" fill="gray" />
          <circle cx="16" cy="24" r="2" fill="gray" />
        </svg>
      </button>
    </div>
  );
}

export default Header;
