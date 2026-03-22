import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3.',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project 4',
      description: 'Description for Project 4.',
      link: 'https://example.com/project4',
    },
    {
      title: 'Project 5',
      description: 'Description for Project 5.',
      link: 'https://example.com/project5',
    },
    {
      title: 'Project 6',
      description: 'Description for Project 6.',
      link: 'https://example.com/project6',
    },
  ];

  return (
    <div>
      <h1>My Client Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;