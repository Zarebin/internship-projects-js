import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <button type="button" id="back" aria-label="back" />
      <button type="button" id="menu" aria-label="menu" />
    </div>
  );
}

export default Header;
