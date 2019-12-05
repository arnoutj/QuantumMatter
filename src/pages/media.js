import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';

export default ({ data: { media } }) => (
  <Layout>
    <Section>
      <Row center="sm">
        <Col xs={12} md={7}>
          <h1>{media.title}</h1>
          <p>{media.text}</p>
        </Col>
      </Row>
    </Section>
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
