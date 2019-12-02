import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data: { researchItem }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <h1>{researchItem.title}</h1>
  </Layout>
);

export const query = graphql`
  query ResearchQuery($id: String) {
    researchItem: datoCmsResearchitem(id: { eq: $id }) {
      title
    }
  }
`;
