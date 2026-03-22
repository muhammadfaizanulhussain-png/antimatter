import React from 'react';

const ServicesPage = () => {
  const services = [
    { title: 'Web Design', description: 'Creating visually appealing and user-friendly website designs.' },
    { title: 'Web Development', description: 'Building robust and scalable web applications.' },
    { title: 'GTM Strategy', description: 'Formulating go-to-market strategies that drive success.' },
    { title: 'App Development', description: 'Developing mobile and desktop applications tailored to your needs.' },
    { title: 'Digital Marketing', description: 'Implementing effective digital marketing campaigns to elevate your brand.' },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;