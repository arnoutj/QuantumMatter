import React from 'react';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

export default ({ data: { newsItem }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Row>
      <Col xs={12} md={6} mdOffset={3}>
        <h2>{newsItem.title}</h2>
        {newsItem.content.map((item, key) => (
          
          <p key={key}>
            {item.textblock}
            {item.file && (
              <img src={item.file.fluid.src} alt={item.file.alt} />
            )}
          </p>
        ))}
      </Col>
    </Row>
  </Layout>
);

export const query = graphql`
  query NewsQuery($slug: String) {
    newsItem: datoCmsNews(lab: { slug: {eq: $slug} }) {
      title
      content {
        ... on DatoCmsParagraph {
          textblock
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
