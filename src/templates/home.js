import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Row, Col } from 'react-flexbox-grid';
import MemberSection from '../components/MemberSection/memberSection';
import Section from '../components/Section/section';

const HomePage = ({ pageContext, data }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row center="sm">
        <Col xs={12} md={7}>
          {data && data.lab && (
            <div>
              <h1>{data.lab.title}</h1>
              <p>{data.lab.description}</p>
            </div>
          )}
          {data && !data.lab && data.home && (
            <div>
              <h1>{data.home.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.home.introTextNode.childMarkdownRemark.html
                }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Section>
    {data.lab && data.lab.principal && (<MemberSection member={data.lab.principal} />)}
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomeQuery($slug: String) {
    lab: datoCmsLab(slug: { eq: $slug }) {
      title
      description
      principal {
        name
        description
        image: photo {
          fixed(width: 200, height: 200, imgixParams: {faceindex: 1, facepad: 3, fit: "facearea"}) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
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
