import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';

export default ({ data: { contact } }) => (
  <Layout>
    <Section>
      <Row center="sm">
        <Col xs={12} md={7}>
          <h1>{contact.title}</h1>
          <p>{contact.text}</p>
        </Col>
      </Row>
    </Section>
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
