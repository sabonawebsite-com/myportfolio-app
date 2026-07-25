
import React from 'react';
import theme from '../assets/images/theme_pattern.svg';
import servicesData from '../assets/services_data'; 
import './Services.css';

const Services = () => {
  return (
    <div className="services" id='service'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="Services theme pattern" />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-read-more">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
