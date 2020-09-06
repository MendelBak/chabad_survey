import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <h5 className='black-text center'>
          Welcome to the 2020 Chabad Survey.
        </h5>
        <div className='row' style={{ display: 'flex' }}>
          <div className='col s12 m6' style={{ display: 'flex' }}>
            <div className='card darken-1 hoverable'>
              <div className='card-content white-text'>
                <span className='card-title black-text'>What is this?</span>
                <p className='black-text'>
                  For years, people have been complaining of issues regarding
                  the Lubavitch education system, with each group arguing that
                  they have the best solution.
                </p>
                <br />
                <p className='black-text'>
                  We believe the right answer starts with asking the right
                  questions.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m6' style={{ display: 'flex' }}>
            <div className='card darken-1 hoverable'>
              <div className='card-content white-text'>
                <span className='card-title black-text'>
                  What is the right question?
                </span>
                <p className='black-text'>
                  Much of the education in Chabad schools is designed to raise
                  shluchim. The problem is that a large majority of Lubavitchers
                  do not end up on permanent shlichus.
                </p>
                <br />
                <p className='black-text'>
                  We want to see how this educational focus impacts the ability
                  for those people to earn a livelihood.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6' style={{ display: 'flex' }}>
            <div className='card darken-1 hoverable'>
              <div className='card-content white-text'>
                <span className='card-title black-text'>
                  How will this website help?
                </span>
                <p className='black-text'>
                  We want to use the anonymous data collected here to
                  definitively understand the state of the Lubavitch community.
                  This data can then be used to make informed educational
                  decisions, instead of relying on guess-work by a few
                  individuals.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m6' style={{ display: 'flex 0' }}>
            <div className='card darken-1 hoverable'>
              <div className='card-content white-text'>
                <span className='card-title black-text'>
                  Is the data I submit anonymous?
                </span>
                <p className='black-text'>Yes.</p>
                <br />
                <p className='black-text'>
                  We do not track you. All your data is anonymous.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          {/* <button className='waves-effect btn-large'>
            Take the survey
            <Link to={'/survey'}>
              <i className='material-icons right'>forward</i>
            </Link>
          </button> */}

          <Link to={'/survey'}>
            <button className='btn-large hoverable white-text'>
              Take the survey
              <i className='material-icons right white-text'>forward</i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
