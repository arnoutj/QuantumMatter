import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';
import Card from '../components/Card/card';
import Message from '../components/Message/message';

const NewsPage = ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsNews.nodes.map((newsItem, key) => (
              <Row key={key}>
                <Col xs={12}>
                  <Card data={newsItem} showThumbnail />
                  {newsItem.content.map((item, key) => (
                    <div key={key}>
                      {item.textblockNode && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.textblockNode.childMarkdownRemark.html
                          }}
                        />
                      )}
                      {item.file && (
                        <img src={item.file.fluid.src} alt={item.file.alt} />
                      )}
                    </div>
                  ))}
                  <hr />
                </Col>
              </Row>
            
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
        intro
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        content {
          ... on DatoCmsParagraph {
            textblockNode {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on DatoCmsImage {
            file {
              alt
              fluid(maxWidth: 650) {
                src
                width
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
