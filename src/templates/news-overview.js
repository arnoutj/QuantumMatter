import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';

const NewsPage = ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsNews.edges.map(({ node: item }, key) => (
            <a
              key={key}
              href={`${item.lab ? `/${item.lab.slug}` : ``}/news/${item.slug}`}
            >
              <h2>{item.title}</h2>
              {item.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content[0].textblockNode.childMarkdownRemark.html
                  }}
                />
              )}
            </a>
          ))}
        </Col>
      </Row>
    </Section>
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
          content {
            ... on DatoCmsParagraph {
              id
              textblockNode {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`;
