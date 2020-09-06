import React, { Component } from 'react';
import { Doughnut, HorizontalBar, Bar, Pie } from 'react-chartjs-2';
import surveySummaryData from './surveySummaryData';

class SurveySummary extends Component {
  render() {
    return (
      <div>
        <div class='row'>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <Doughnut
                  data={surveySummaryData.education}
                  options={surveySummaryData.salary.options}
                />
              </div>
              <div class='card-content'>
                <p>
                  40% of survey respondents said that a lack of English skills
                  held them back from achieving in their professional careers.
                </p>
              </div>
            </div>
          </div>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <Pie
                  data={surveySummaryData.education}
                  options={surveySummaryData.education.options}
                />
              </div>
              <div class='card-content'>
                <p>
                  Just 23% of respondents felt their education in Chabad schools
                  helped prepare them for their professional careers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <Bar
                  data={surveySummaryData.education}
                  options={surveySummaryData.education.options}
                />
              </div>
            </div>
          </div>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <Bar
                  data={surveySummaryData.salary}
                  options={surveySummaryData.salary.options}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <Doughnut
                  data={surveySummaryData.education}
                  options={surveySummaryData.education.options}
                />
              </div>
            </div>
          </div>
          <div class='col s12 m6'>
            <div class='card'>
              <div class='card-image'>
                <HorizontalBar
                  data={surveySummaryData.salary}
                  options={surveySummaryData.salary.options}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveySummary;
