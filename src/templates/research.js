import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Message from '../components/Message/message';

export default ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          {data.allDatoCmsResearchitem.nodes.map((item, key) => (
            <div key={key}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
      <Message showIfEmpty={{
        data: data.allDatoCmsResearchitem.nodes,
        type: "research topics" 
      }}/>
    </Section>
  </Layout>
);

export const query = graphql`
  query ResearchQuery($filter: DatoCmsResearchitemFilterInput) {
    allDatoCmsResearchitem(filter: $filter) {
      nodes {
        title
        content
      }
    }
  }
`;
