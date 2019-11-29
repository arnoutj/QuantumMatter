import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <h1>{data.datoCmsNews.title}</h1>
  </Layout>
);

export const query = graphql`
  query NewsQuery($slug: String) {
    datoCmsNews(lab: { slug: {eq: $slug} }) {
      title
    }
  }
`;
