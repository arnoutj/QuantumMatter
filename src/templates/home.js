import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { Grid, Row, Col } from 'react-flexbox-grid';

const HomePage = ({ data: { lab }, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Grid>
      <Row>
        <Col>
          <h1>Homepage of {lab.title}</h1>
          <p>{lab.description}</p>
        </Col>
      </Row>
    </Grid>
  </Layout>
);

export default HomePage;

export const query = graphql`
  query HomeQuery($slug: String!) {
    lab: datoCmsLab(slug: { eq: $slug }) {
      title
      description
    }
  }
`;
