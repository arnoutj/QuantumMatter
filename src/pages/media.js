import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data: { media } }) => (
  <Layout>
    <h1>{media.title}</h1>
    <p>{media.text}</p>
  </Layout>
);

export const query = graphql`
  query MediaPageQuery {
    media: datoCmsMediaPage {
      text
      title
    }
  }
`;
