import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

export default ({ data: { contact } }) => (
  <Layout>
    <Row center="sm">
      <Col xs={12} md={7}>
        <h1>{contact.title}</h1>
        <p>{contact.text}</p>
      </Col>
    </Row>
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
