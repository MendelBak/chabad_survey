import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav style={{ marginBottom: '4%' }}>
        <div class='nav-wrapper'>
          <a href='#' class='brand-logo center'>
            Chabad Survey
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='#'>Survey Summary</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
