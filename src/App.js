import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Custom Components
import Navbar from './Navbar';
import Form from './Form/Form';
import Summary from './Summary/Summary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Form />;
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
