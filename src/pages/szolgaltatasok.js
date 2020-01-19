import React from 'react';
import Navbar from '../components/navbar/navbar';
import Accordion from '../components/accordion/accordion';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <div>
      <Navbar />
      <Accordion
        title="Szolgáltatásaink"
        accordionItems={data.site.siteMetadata.ourServices}
      />
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        ourServices {
          title
          description
        }
      }
    }
  }
`;
