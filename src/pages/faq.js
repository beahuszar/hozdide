import React from 'react';
import Navbar from '../components/navbar/navbar';
import Accordion from '../components/accordion/accordion';

export default ({ data }) => {
  return (
    <div>
      <Navbar />
      <Accordion
        title="Gyakori kérdések"
        accordionItems={data.site.siteMetadata.faq}
      />
    </div>
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
