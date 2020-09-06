import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        class='page-footer'
        style={{
          marginTop: '3%',
          display: 'flex',
          minHeight: '10vh',
          flexDirection: 'column',
        }}
      >
        <div class='footer-copyright'>
          <div class='container'>
            Chabad Survey 2020
            <a
              href='mailto:613mendel@gmail.com'
              className='grey-text text-lighten-4 right'
            >
              {' '}
              Contact me at 613mendel@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
