import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';
import Card from '../components/Card/card';
import Message from '../components/Message/message';

const NewsPage = ({ data, pageContext, location }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsNews.nodes.map((node, key) => (
            <Card key={key} data={node} location={location} showThumbnail />
          ))}
        </Col>
      </Row>
      <Message
        showIfEmpty={{
          data: data.allDatoCmsNews.nodes,
          type: 'news items'
        }}
      />
    </Section>
  </Layout>
);

export default NewsPage;

export const query = graphql`
  query NewsOverviewQuery($filter: DatoCmsNewsFilterInput) {
    allDatoCmsNews(filter: $filter) {
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
