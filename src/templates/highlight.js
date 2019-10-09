import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>{data.datoCmsHighlight.title}</h1>
  </Layout>
);

export const query = graphql`
  query HighlightQuery($slug: String) {
    datoCmsHighlight(lab: { slug: {eq: $slug} }) {
      title
    }
  }
`;
