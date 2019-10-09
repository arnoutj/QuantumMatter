import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>{data.datoCmsMedia.title}</h1>
  </Layout>
);

export const query = graphql`
  query MediaQuery($slug: String) {
    datoCmsMediaitem(lab: { slug: {eq: $slug} }) {
      title
    }
  }
`;
