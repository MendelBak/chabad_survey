import React, { Component } from 'react';
import { Doughnut, HorizontalBar, Bar } from 'react-chartjs-2';
import surveySummaryData from './surveySummaryData';

class SurveySummary extends Component {
  render() {
    return (
      <div className='chart-container'>
        <Doughnut
          data={surveySummaryData.doughnut}
          options={surveySummaryData.doughnut.options}
        />

        <HorizontalBar
          data={surveySummaryData.horizontalBar}
          options={surveySummaryData.horizontalBar.options}
        />
      </div>
    );
  }
}

export default SurveySummary;
