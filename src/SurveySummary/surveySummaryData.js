const surveySummaryData = {
  education: {
    labels: ['No Formal Education', 'HS/GED', 'BA', 'MA'],
    datasets: [
      {
        data: [100, 70, 50, 20],
        backgroundColor: ['#FF6384', '#cc65fe', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#cc65fe', '#36A2EB', '#FFCE56'],
      },
    ],
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
  },
};

export default surveySummaryData;
