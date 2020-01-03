import React from 'react';
import { Link } from 'gatsby';

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
      <Link activeClassName="active" ac to={to}>
        {children}
      </Link>
    </li>
  );
};
