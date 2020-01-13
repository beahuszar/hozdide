import React from 'react';
import { Link } from 'gatsby';

export default ({ children, to, external }) => {
  if (external) {
    return (
      <li>
        <a href={to} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};
