import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Card from '../components/Card/card';
import Message from '../components/Message/message';

const HighlightsPage = ({ data, pageContext, location }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsHighlight.nodes.map((node, key) => (
            <Card key={key} data={node} location={location} />
          ))}
        </Col>
      </Row>
      <Message
        showIfEmpty={{
          data: data.allDatoCmsHighlight.nodes,
          type: 'highlights'
        }}
      />
    </Section>
  </Layout>
);

export default HighlightsPage;

export const query = graphql`
  query HighlightsOverviewQuery($filter: DatoCmsHighlightFilterInput) {
    allDatoCmsHighlight(filter: $filter) {
      nodes {
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
