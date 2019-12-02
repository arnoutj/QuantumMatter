import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data : { highlightItem }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <h1>{highlightItem.title}</h1>
  </Layout>
);

export const query = graphql`
  query HighlightQuery($id: String) {
    highlightItem: datoCmsHighlight(id: { eq: $id }) {
      title
    }
  }
`;
