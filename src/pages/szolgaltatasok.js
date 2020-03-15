import React from 'react';
import Accordion from '../components/accordion/accordion';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <Layout>
      <Accordion
        title="Szolgáltatásaink"
        accordionItems={data.site.siteMetadata.ourServices}
      />
    </Layout>
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
