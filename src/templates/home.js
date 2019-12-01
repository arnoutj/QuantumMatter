import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

const HomePage = ({ data: { lab }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Row center="sm">
      <Col xs={12} md={7}>
        <h1>{lab.title} Lab</h1>
        <p>{lab.description}</p>
      </Col>
    </Row>
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
