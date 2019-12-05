import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Publication from '../components/Publication/publication';

export default ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsPublication.group
          .sort((a, b) => b.year - a.year)
          .map((group, key) => (
            <div key={key}>
              <h2>{group.year}</h2>
              {group.nodes.map((item, key) => <Publication key={key} data={item} />)}
            </div>
          ))}
        </Col>
      </Row>
    </Section>
  </Layout>
);

export const query = graphql`
  query PublicationQuery($slug: String) {
    allDatoCmsPublication(filter: { lab: { slug: { eq: $slug } } }) {
      group(field: year){
        year: fieldValue
        nodes {
          title
          author
          journal
          year
          url
        }
      }
    }
  }
`;