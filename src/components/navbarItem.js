import React from 'react';
import { Link } from 'react-router-dom';

export default prop => {
  if (prop.external) {
    return (
      <li style={{ margin: '10px' }}>
        <a href={prop.to} target="_blank" rel="noopener noreferrer">
          {prop.title}
        </a>
      </li>
    );
  }

  return (
    <li style={{ margin: '10px' }}>
      <Link to={prop.to}>{prop.title}</Link>
    </li>
  );
};
