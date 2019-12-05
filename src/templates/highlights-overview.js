import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Card from '../components/Card/card';

const HighlightsPage = ({ data, pageContext, location }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsHighlight.nodes.map((node, key) => <Card key={key} data={node} location={location} />)}
        </Col>
      </Row>
    </Section>
  </Layout>
);

export default HighlightsPage;

export const query = graphql`
  query HighlightsOverviewQuery($slug: String) {
    allDatoCmsHighlight(filter: { lab: { slug: { eq: $slug } } }) {
      nodes{
        title
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        intro
        slug
        lab {
          slug
        }
      }
    }
  }
`;