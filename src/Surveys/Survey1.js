const Survey1 = {
  title: 'Chabad Survey 1',
  survey: {
    0: {
      id: 0,
      label: 'Age',
      question: 'How old are you?',
      type: 'number',
    },
    1: {
      id: 1,
      label: 'City',
      question: 'In which city do you live?',
      type: 'text',
    },
    2: {
      id: 2,
      label: 'Education Level',
      question: 'What is the highest level of education you have?',
      type: 'select',
      multipleSelect: false,
      options: {
        none: 'None',
        hs: 'High School Diploma/ GED',
        ba: "Bachelor's Degree",
        ma: "Master's Degree",
        phd: 'Phd',
      },
    },
    3: {
      id: 3,
      label: 'Industry',
      question: 'What industry do you work in?',
      type: 'select',
      multipleSelect: false,
      options: {
        education: 'Education',
        foodservice: 'Foodservice',
        tech: 'Technology',
        finance: 'Finance',
        healthcare: 'Healthcare',
        business: 'Business',
        construction: 'Construction',
        hospitality: 'Hospitality',
        government: 'Government',
        agriculture: 'Agriculture',
        tradesman: 'Tradesmen',
        transportation: 'Transportation',
        warehouse: 'Warehouse',
        manufacturing: 'Manufacturing',
        other: 'Other',
      },
    },
    4: {
      id: 4,
      label: 'Years of Work Experience',
      question: 'How many years have you worked in your current industry?',
      type: 'select',
      multipleSelect: false,
      options: {
        0: '0 - 3',
        3: '3 - 6',
        5: '6 - 9',
        9: '9 - 15',
        15: '15+',
      },
    },
    5: {
      id: 5,
      label: 'Dissatisfaction',
      question:
        'Did anything missing in your education hold you back in your professional career?',
      type: 'select',
      multipleSelect: true,
      options: {
        none: 'None',
        english: 'English (writing/reading etc)',
        math: 'Math skills',
        interpersonal: 'Interpersonal skills',
        professional: 'Understanding of professional work environment',
        other: 'Other',
      },
    },
    6: {
      id: 6,
      label: 'Yearly Salary',
      question: 'What is your current yearly salary?',
      type: 'select',
      multipleSelect: false,
      options: {
        20000: '$20,000 - $40,000',
        40000: '$40,000 - $60,000',
        60000: '$60,000 - $80,000',
        80000: '$80,000 - $100,000',
        100000: '$100,000 - $150,000',
        150000: '$150,000+',
      },
    },
    7: {
      id: 7,
      label: 'Chabad Background',
      question:
        'Were you primarily raised in the "Lubavitch community, going to Lubavitch schools?',
      type: 'switch',
    },
    8: {
      id: 8,
      label: 'Specialized Trade Training',
      question:
        'Have you earned a specialized trade certification, such as electrical, plumbing, metal working, certification?',
      type: 'switch',
    },
    9: {
      id: 9,
      label: 'Education Necessary?',
      question: 'Do you believe your education contributed to your success?',
      type: 'switch',
    },
    10: {
      id: 10,
      label: 'Additional Education',
      question:
        'Do you feel your education was sufficient to help prepare you for your professional career?',
      type: 'switch',
    },
    11: {
      id: 11,
      label: 'Are you happy with the job opportunities you have?',
      type: 'switch',
      question: 'Are you happy with the industry you work in?',
    },
    12: {
      id: 12,
      label: 'Benefits',
      question:
        'Does your job provide you benefits? (Health insurance, 401(k), etc.',
      type: 'switch',
    },
    13: {
      id: 13,
      label: 'Comments',
      question: 'Do you have any comments?',
      type: 'text',
    },
  },
};

export default Survey1;
