import React from 'react';
import Map from '../contact/map';
import OpenHours from '../contact/openHours';
import ContactInfo from '../contact/contactInfo';
import s from './footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={s.contactSection}>
        <OpenHours />
        <ContactInfo />
      </div>
      <Map />
    </>
  );
};

export default Footer;
