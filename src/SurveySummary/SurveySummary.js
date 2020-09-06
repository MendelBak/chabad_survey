import React, { Component } from 'react';
import { Doughnut, HorizontalBar, Bar, Pie } from 'react-chartjs-2';
import surveySummaryData from './surveySummaryData';

class SurveySummary extends Component {
  render() {
    return (
      <div>
        <h6 className='flow-text center'>
          All the data on this page is dummy data and acts purely as a
          representation for what this website is capable of displaying.
        </h6>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <Doughnut
                  data={surveySummaryData.education}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Percent Unhappy With Professional Opportunities',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                  }}
                />
              </div>
              <div className='card-content'>
                <p>
                  40% of survey respondents said that a lack of English skills
                  held them back from achieving in their professional careers.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <Pie
                  data={surveySummaryData.education}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Education Achieved',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                  }}
                />
              </div>
              <div className='card-content'>
                <p> 
                  Just 23% of respondents felt their education in Chabad schools
                  helped prepare them for their professional careers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <HorizontalBar
                  data={surveySummaryData.salary}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Salary Based on Education',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <Bar
                  data={surveySummaryData.salary}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Salary Based on Education',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <Bar
                  data={surveySummaryData.salary}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Salary Based on Education',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card'>
              <div className='card-image'>
                <HorizontalBar
                  data={surveySummaryData.salary}
                  options={{
                    title: {
                      display: true,
                      position: 'top',
                      text: 'Salary Based on Education',
                    },
                    legend: {
                      display: true,
                      position: 'bottom',
                    },
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
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
