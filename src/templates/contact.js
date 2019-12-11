import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';
import Maps from '../components/Maps/maps';

export default ({ data: { contact }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <h2>Address</h2>
              <p dangerouslySetInnerHTML={{ __html: contact.addressNode.childMarkdownRemark.html }} />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <h2>{contact.title}</h2>
               <p dangerouslySetInnerHTML={{ __html: contact.textNode.childMarkdownRemark.html }} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} mdOffset={2}>
          <Maps />
        </Col>
      </Row>
    </Section>
  </Layout>
);

export const query = graphql`
  query ContactPageQuery {
    contact: datoCmsContactPage {
      title
      addressNode {
        childMarkdownRemark {
          html
        }
      }
      textNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
