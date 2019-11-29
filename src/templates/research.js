import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <h1>{data.datoCmsResearchitem.title}</h1>
  </Layout>
);

export const query = graphql`
  query ResearchQuery($slug: String) {
    datoCmsResearchitem(lab: { slug: {eq: $slug} }) {
      title
    }
  }
`;
