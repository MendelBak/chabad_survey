const surveySummaryData = {
  education: {
    labels: ['No Education', 'HS/GED', 'BA', 'MA'],
    datasets: [
      {
        data: [300, 20, 50, 100],
        backgroundColor: ['#FF6384', '#cc65fe', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#cc65fe', '#36A2EB', '#FFCE56'],
      },
    ],
    options: {
      title: {
        display: true,
        position: 'top',
        text: 'Education Achieved',
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  },
  salary: {
    labels: ['$20,000 - $40,000', '$40,000 - $80,000', '$80,000 - $150,000'],
    datasets: [
      {
        label: 'No Education',
        data: [25, 20, 35, 12],
        backgroundColor: ['#FF6384', '#FF6384', '#FF6384'],
      },
      {
        label: 'HS/GED',
        data: [35, 20, 30, 12],
        backgroundColor: ['#cc65fe', '#cc65fe', '#cc65fe'],
      },
      {
        label: 'BA',
        data: [35, 30, 60, 23],
        backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB'],
      },
      {
        label: 'MA',
        data: [35, 40, 100, 80],
        backgroundColor: ['#FFCE56', '#FFCE56', '#FFCE56'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: true,
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
      },
    },
  },
};

export default surveySummaryData;
