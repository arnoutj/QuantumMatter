import React from 'react';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

export default ({ data: { newsItem }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Row>
      <Col xs={12} md={6} mdOffset={3}>
        <h2>{newsItem.title}</h2>
        {newsItem.content.map((item, key) => (
          <div key={key}>
            {item.textblockNode && (
              <p
                dangerouslySetInnerHTML={{
                  __html: item.textblockNode.childMarkdownRemark.html
                }}
              />
            )}
            {item.file && <img src={item.file.fluid.src} alt={item.file.alt} />}
          </div>
        ))}
      </Col>
    </Row>
  </Layout>
);

export const query = graphql`
  query NewsQuery($id: String) {
    newsItem: datoCmsNews(id: { eq: $id }) {
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
`;
