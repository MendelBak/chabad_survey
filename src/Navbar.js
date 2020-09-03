import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={{ marginBottom: '4%' }}>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo center'>
              Chabad Survey
            </a>
            <a href='/#' data-target='sideLinks' className='sidenav-trigger'>
              <i class='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a href='/survey'>Survey</a>
              </li>
              <li>
                <a href='/surveySummary'>Survey Summary</a>
              </li>
            </ul>

            {/* Navbar links (same links as above regular navbar) for mobile friendly hamburger menu. */}
            <ul class='sidenav' id='sideLinks'>
              <li>
                <a href='/survey'>Survey</a>
              </li>
              <li>
                <a href='/surveySummary'>Survey Summary</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
