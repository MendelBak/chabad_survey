import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <h5 className='center'>Welcome to the 2020 Chabad Survey</h5>
        <div className='row' style={{ display: 'flex' }}>
          <div className='col s12 m6' style={{ display: 'flex' }}>
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>What is this?</span>
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
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>What is the right question?</span>
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
        <div className='row' style={{ display: 'flex' }}>
          <div className='col s12 m6' style={{ display: 'flex' }}>
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>How will this website help?</span>
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
          <div className='col s12 m6' style={{ display: 'flex 1' }}>
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>
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
        <div className='row' style={{ display: 'flex' }}>
          <div className='col s12 m6' style={{ display: 'flex 0' }}>
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>Is this project live?</span>
                <p className='black-text'>At this time the site is not live.</p>
                <br />
                <p className='black-text'>
                  There remains some work in order to capture user data, and
                  return it in a meaningful manner, as well as authentication
                  (to ensure that only one response per person is captured).
                </p>
                <br />
                <p>
                  The most significant challenge to this project, right now, is
                  distributing this survey to the wider Chabad community.
                </p>
                <br />
                <p>
                  Other exciting opportunities are present, such as creating an
                  API with useful Chabad community demographic data, which will
                  help inspire and power many other useful projects.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m6' style={{ display: 'flex 0' }}>
            <div className='card hoverable'>
              <div className='card-content'>
                <span className='card-title'>
                  How can I find out more about this project?
                </span>
                <p className='black-text'>
                  If you would like to help make this project a reality, please
                  contact me at
                  <a href='mailto:613mendel@gmail.com'> 613mendel@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/survey'}>
          <button className='btn-large hoverable'>
            Take the survey
            <i className='material-icons right'>forward</i>
          </button>
        </Link>


      </div>
    );
  }
}

export default Landing;
