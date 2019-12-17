import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ children, to, external }) => {
  if (external) {
    return (
      <li style={{ marginRight: '10px' }}>
        <a href={to} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </li>
    );
  }

  return (
    <li style={{ marginRight: '10px' }}>
      <NavLink activeClassName="active" ac to={to}>
        {children}
      </NavLink>
    </li>
  );
};
