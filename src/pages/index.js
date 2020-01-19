import React from 'react';
import Navbar from '../components/navbar/navbar';
import CoverPhoto from '../components/coverphoto/coverphoto';

export default ({ data }) => {
  return (
    <div>
      <Navbar />
      <CoverPhoto />
    </div>
  );
};
