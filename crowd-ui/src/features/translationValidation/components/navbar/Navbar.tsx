import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import './navbar.scss';

function Navbar() {
  return (
    <div className="container-nav">
      <div className="dropdown">
        <Nav>
          {/* active="EnglishPersian" */}
          <NavDropdown title="English -> Persian " className="nav-link" id="drop">
            <NavDropdown.Item href="#" eventKey="EnglishPersian">
              English
              {'->'}
              {' '}
              Persian
            </NavDropdown.Item>
            <NavDropdown.Item href="#" eventKey="PersianEnglish">
              Persian
              {'->'}
              {' '}
              English
            </NavDropdown.Item>
            <NavDropdown.Item href="#" eventKey="More">More</NavDropdown.Item>

          </NavDropdown>

        </Nav>
      </div>

      <div className="threeDotsVertical">

        <Nav>
          <NavDropdown id="three" title="">
            <NavDropdown.Item href="#">1</NavDropdown.Item>
            <NavDropdown.Item href="#">2</NavDropdown.Item>
            <NavDropdown.Item href="#">3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>

    </div>
  );
}

export default Navbar;
