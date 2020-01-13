import React from 'react';
import Header from '../components/header/header';
import CoverPhoto from '../components/coverphoto/coverphoto';
import Accordion from '../components/accordion/accordion';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <div>
      <Header />
      <CoverPhoto />
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
