import SurveySummary from './SurveySummary';

const surveySummaryData = {
  doughnut: {
    labels: ['No Education', 'BA', 'MA'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
    options: {
      //   responsive: true,
      //   maintainAspectRatio: true,
      title: {
        display: true,
        position: 'top',
        text: 'Education',
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  },
  horizontalBar: {
    labels: ['$20,000 - $40,000', '$40,000 - $80,000', '$80,000 - $150,000'],
    datasets: [
      {
        label: 'No Education',
        data: [25, 20, 35],
        backgroundColor: ['#FF6384', '#FF6384', '#FF6384'],
        hoverBackgroundColor: ['#DD6384', '#36A2EB', '#FFCE56'],
      },
      {
        label: 'BA',
        data: [35, 20, 30],
        backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB'],
        hoverBackgroundColor: ['#BB6384', '#36A2EB', '#FFCE56'],
      },
      {
        label: 'MA',
        data: [35, 40, 100],
        backgroundColor: ['#FFCE56', '#FFCE56', '#FFCE56'],
        hoverBackgroundColor: ['#AA6384', '#36A2EB', '#FFCE56'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'top',
        text: 'Salary',
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
      },
    },
  },
};

export default surveySummaryData;
