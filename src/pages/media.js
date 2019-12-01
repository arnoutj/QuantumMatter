import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

export default ({ data: { media } }) => (
  <Layout>
    <Row center="sm">
      <Col xs={12} md={7}>
        <h1>{media.title}</h1>
        <p>{media.text}</p>
      </Col>
    </Row>
  </Layout>
);

export const query = graphql`
  query MediaPageQuery {
    media: datoCmsMediaPage {
      text
      title
    }
  }
`;
