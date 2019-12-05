import React from 'react';
import Layout from '../components/Layout/layout';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';
import Card from '../components/Card/card';

export default ({ data: { newsItem }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <Card data={newsItem} hideLink />
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
        </Col>
      </Row>
    </Section>
  </Layout>
);

export const query = graphql`
  query NewsQuery($id: String) {
    newsItem: datoCmsNews(id: { eq: $id }) {
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
`;
