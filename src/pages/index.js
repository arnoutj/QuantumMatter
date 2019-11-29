import React from 'react';
import Layout from '../components/Layout/layout';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const IndexPage = ({ data: { home } }) => (
  <Layout>
    <HelmetDatoCms seo={home.seoMetaTags} />
    <div
      dangerouslySetInnerHTML={{
        __html: home.introTextNode.childMarkdownRemark.html
      }}
    />

    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
