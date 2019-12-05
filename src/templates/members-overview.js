import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Member from '../components/Member/member';

const MembersPage = ({ data, pageContext, location }) => (
  <Layout pageContext={pageContext}>
    {data.allDatoCmsRole.nodes.map((role, key) => (
      <Section key={key}>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <div className="role-group">
              <h2>{role.title}</h2>
              <Row>
                {data.allDatoCmsMember.nodes
                  .filter((member) => member.role.name === role.name)
                  .map((member, key) => (
                    <Col xs={6} lg={4} key={key}>
                      <Member data={member} />
                    </Col>
                  ))}
              </Row>
            </div>
        </Col>
      </Row>
    </Section>
    ))}
  </Layout>
);

export default MembersPage;

export const query = graphql`
  query MembersOverviewQuery($slug: String) {
    allDatoCmsRole {
      nodes {
        name
        title
      }
    }
    allDatoCmsMember(filter: { lab: { slug: { eq: $slug } } }) {
      nodes {
        name
        description
        image: photo {
          fixed(width: 150) {
            ...GatsbyDatoCmsFixed
          }
        }
        role {
          name
        }
      }
    }
  }
`;
