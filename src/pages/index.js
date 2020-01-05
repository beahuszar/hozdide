import React from 'react';
import Header from '../components/header/header';
import CoverPhoto from '../components/coverphoto/coverphoto';
import Toggle from '../components/toggle/toggle';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <div>
      <Header />
      <CoverPhoto />
      <Toggle
        title="A kis listam"
        definitions={data.site.siteMetadata.ourServices}
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
