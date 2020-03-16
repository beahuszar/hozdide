import React from 'react';
import Map from './map';
import OpenHours from './openHours';
import ContactInfo from './contactInfo';
import s from './contactsection.module.scss';

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
