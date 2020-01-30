import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const OpenHours = () => {
  const openHrs = useStaticQuery(graphql`
    query openHrs {
      site {
        siteMetadata {
          openHours {
            day
            morning
            afternoon
          }
        }
      }
    }
  `).site.siteMetadata.openHours;

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Delelott</th>
          <th>Delutan</th>
        </tr>
      </thead>
      <tbody>
        {openHrs.map(row => (
          <tr>
            <th>{row.day}</th>
            <td>{row.morning}</td>
            <td>{row.afternoon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OpenHours;
