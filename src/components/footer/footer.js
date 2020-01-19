import React from 'react';
import Map from '../contact/map';
import OpenHours from '../contact/openHours';
import ContactInfo from '../contact/contactInfo';

const Footer = () => {
  return (
    <div>
      <OpenHours />
      <ContactInfo />
      <Map />
    </div>
  );
};

export default Footer;
