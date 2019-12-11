import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section/section';
import Card from '../components/Card/card';
import Message from '../components/Message/message';

export default ({ data }) => (
  <Layout>
    <Section>
      {/* <Row center="sm">
        <Col xs={12} md={7}>
          <h1>{data.mediaPage.title}</h1>
          <p>{data.mediaPage.text}</p>
        </Col>
      </Row> */}
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.mediaItems.nodes.map((mediaItem, key) => (
            <div>
              <Card key={key} data={mediaItem} />
              {mediaItem.content.map((item, key) => (
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
            </div>
          ))}
          <Message
            showIfEmpty={{
              data: data.mediaItems.nodes,
              type: 'media items'
            }}
          />
        </Col>
      </Row>
    </Section>
  </Layout>
);

export const query = graphql`
  query MediaPageQuery {
    # mediaPage: datoCmsMediaPage {
    #   text
    #   title
    # }
    mediaItems: allDatoCmsMediaitem {
      nodes {
        title
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
