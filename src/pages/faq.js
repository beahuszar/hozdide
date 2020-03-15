import React from 'react';
import Accordion from '../components/accordion/accordion';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

export default ({ data }) => {
  return (
    <Layout>
      <Accordion
        title="Gyakori kérdések"
        accordionItems={data.site.siteMetadata.faq}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        faq {
          title
          description
        }
      }
    }
  }
`;
