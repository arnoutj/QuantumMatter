import React from 'react';
import Layout from '../components/Layout/layout';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Row, Col } from 'react-flexbox-grid';

const IndexPage = ({ data: { home } }) => (
  <Layout>
    <HelmetDatoCms seo={home.seoMetaTags} />
    <Row center="sm">
      <Col xs={12} md={7}>
        <h1>{home.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: home.introTextNode.childMarkdownRemark.html
          }}
        />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
