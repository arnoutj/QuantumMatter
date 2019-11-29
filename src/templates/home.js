import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

const HomePage = ({ data: { lab } }) => (
  <Layout>
    <h1>Homepage of {lab.title}</h1>
    <p>{lab.description}</p>
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomeQuery($slug: String!) {
    lab: datoCmsLab(slug: { eq: $slug }) {
      title
      description
    }
  }
`;
