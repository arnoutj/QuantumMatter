import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Member from '../components/Member/member';
import Message from '../components/Message/message';

const MembersPage = ({ data, pageContext }) => {
  console.log(data);
  // Create groups per role only when they have members
  const roleGroups = data.allDatoCmsRole.nodes.filter((role) => {
    role.members = data.allDatoCmsMember.nodes.filter(
      (member) => member.role.name === role.name
    );
    return role.members.length;
  });
  return (
    <Layout pageContext={pageContext}>
      <Section>
        {roleGroups.map((roleGroup, key) => (
          <Row key={key}>
            <Col xs={12} md={8} mdOffset={2}>
              <div className="role-group">
                <h2>{roleGroup.title}</h2>
                <Row>
                  {roleGroup.members.map((member, key) => (
                    <Col xs={6} lg={4} key={key}>
                      <Member data={member} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        ))}
        <Message
          showIfEmpty={{
            data: roleGroups,
            type: 'members'
          }}
        />
      </Section>
    </Layout>
  );
};

export default MembersPage;

export const query = graphql`
  query MembersOverviewQuery($filter: DatoCmsMemberFilterInput) {
    allDatoCmsRole {
      nodes {
        name
        title
      }
    }
    allDatoCmsMember(filter: $filter) {
      nodes {
        name
        description
        contact
        image: photo {
          fixed(width: 150) {
            ...GatsbyDatoCmsFixed
          }
        }
        role {
          name
        }
        urlUva
        urlPersonal
      }
    }
  }
`;
