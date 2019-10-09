import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
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
