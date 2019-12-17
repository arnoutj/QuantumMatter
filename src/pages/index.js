import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import {MemberSectionColumns } from '../components/MemberSection/memberSection';

const IndexPage = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.home.seoMetaTags} />
    <Section>
      <Row center="sm">
        <Col xs={12} md={7}>
          {data && data.home && (
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
    {data.labs && (
      <MemberSectionColumns
        members={data.labs.nodes
          .filter((lab) => lab.principal)
          .map((lab) => lab.principal)}
      />
    )}
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
    labs: allDatoCmsLab {
      nodes {
        principal {
          name
          description
          image: photo {
            fixed(width: 150, height: 150, imgixParams: {faceindex: 1, facepad: 3, fit: "facearea"}) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;
