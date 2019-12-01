import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

const NewsPage = ({ data }) => (
  <Layout>
    <Row>
      <Col xs={12} md={6} mdOffset={3}>
        {data.allDatoCmsNews.edges.map(({ node: article }, key) => (
          <a
            key={key}
            href={`${article.lab ? article.lab.slug : ''}/news/${article.slug}`}
          >
            <h2>{article.title}</h2>
          </a>
        ))}
      </Col>
    </Row>
  </Layout>
);

export default NewsPage;

export const query = graphql`
  query NewsOverviewQuery($slug: String) {
    allDatoCmsNews(filter: { lab: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          title
          slug
          lab {
            slug
          }
        }
      }
    }
  }
`;
