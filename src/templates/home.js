import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';

const HomePage = ({ pageContext, data }) => (
  <Layout pageContext={pageContext}>
    <Row center="sm">
      <Col xs={12} md={7}>
        {data && data.lab && (
          <div>
            <h1>{data.lab.title} Lab</h1>
            <p>{data.lab.description}</p>
          </div>
        )}
        {data && !data.lab && data.home && (
          <div
            dangerouslySetInnerHTML={{
              __html: data.home.introTextNode.childMarkdownRemark.html
            }}
          />
        )}
      </Col>
    </Row>
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomeQuery($slug: String!) {
    lab: datoCmsLab(slug: { eq: $slug }) {
      title
      description
    }
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
