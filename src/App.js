import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import M from 'materialize-css';

// Custom Components
import Navbar from './Navbar';
import Landing from './Landing';
import Form from './Form/Form';
import SurveySummary from './SurveySummary/SurveySummary';

class App extends Component {
  componentDidMount() {
    // Auto initialize MaterializeCSS components. This may cause issues if trying to initialize specific MaterializeCSS components and pass them options.
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/survey' component={Form} />
          <Route exact path='/surveySummary' component={SurveySummary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
