const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://vothaiduong14.github.io',
  title: 'DV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Duong Vo',
  role: 'Machine Learning Engineer',
  description:
    'I love mining data, tinkering with technology, hitting balls with my racket and more.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/duongvothai/',
    github: 'https://github.com/vothaiduong14',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'LT disease cough detection and automatic labeling on AWS Sagemaker',
    stack: ['AWS Sagemaker', 'Python', 'Pytorch'],
    sourceCode: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Fast MRI on single-coil and multi-coil knee dataset using self-Unet and Varnet',
    stack: ['Google Colab', 'Python', 'Pytorch'],
    sourceCode: 'https://github.com/vothaiduong14/fastMRI_DLProject',
  },
  {
    name: 'Project 3',
    description:
      'Sentiment Analysis and Network Visualization on US Regulatory data',
    stack: ['Python', 'SQLite', 'Tensorflow/Keras', 'd3.js', 'Tableau'],
    sourceCode: 'https://github.com/vothaiduong14/US_Regulatory_Analytics',
  },
  {
    name: 'Project 4',
    description:
      'Banking data with PostgreSQL and FastAPI',
    stack: ['PostgreSQL', 'FastAPI', 'SQLAlchemy', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 5',
    description:
      'Banking data with PostgreSQL and FastAPI',
    stack: ['PostgreSQL', 'FastAPI', 'SQLAlchemy', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 6',
    description:
      'Banking data with PostgreSQL and FastAPI',
    stack: ['PostgreSQL', 'FastAPI', 'SQLAlchemy', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'SQL',
  'Python',
  'R',
  'Matlab',
  'Pytorch',
  'Tensorflow',
  'HTML/CSS/Javascript',
  'React',
  'd3.js',
  'Tableau',
  'Streamlit',
  'FastAPI',
  'AWS/Azure/GCP/Databricks',
  'PySpark',
  'Git/Github',
  'Docker',
  'CI/CD',
  'MLflow',
  'Airflow',
  'Latex'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vothaiduong14@gmail.com',
}

export { header, about, projects, skills, contact }
