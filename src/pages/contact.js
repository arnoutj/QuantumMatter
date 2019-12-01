import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export default ({ data: { contact } }) => (
  <Layout>
    <h1>{contact.title}</h1>
    <p>{contact.text}</p>
  </Layout>
);

export const query = graphql`
  query ContactPageQuery {
    contact: datoCmsContactPage {
      text
      title
    }
  }
`;
