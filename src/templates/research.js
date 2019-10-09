import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
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
