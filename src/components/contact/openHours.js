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
    <>
      <h3>Nyitvatartás</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Délelott</th>
            <th>Délután</th>
          </tr>
        </thead>
        <tbody>
          {openHrs.map(row => (
            <tr key={row.day}>
              <th>{row.day}</th>
              <td>{row.morning}</td>
              <td>{row.afternoon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OpenHours;
