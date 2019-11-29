import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data }) => (
  <Layout>
    <div>{data.lab.title}</div>
  </Layout>
);

export const query = graphql`
  query ContactQuery($slug: String!) {
    lab: datoCmsLab(slug: { eq: $slug }) {
      title
      description
      # contactInformation
    }
  }
`;
