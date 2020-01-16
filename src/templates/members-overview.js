import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import sortByLastNameAscending from '../utils/sort-by-lastname';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Member from '../components/Member/member';
import Message from '../components/Message/message';

const MembersPage = ({ data, pageContext }) => {

  // Create groups per role only when they have members
  const roleGroups = data.allDatoCmsRole.nodes
    .sort((a, b) => a.order - b.order)
    .filter(
      (role) => {
        role.members = data.allDatoCmsMember.nodes
        .filter(
          (member) => member.role.name === role.name
        ).sort(
          (a, b) => sortByLastNameAscending(a.name, b.name)
      );
    return role.members.length;
  });
  return (
    <Layout pageContext={pageContext}>
      <Section>
        {roleGroups.map((roleGroup, key) => (
          <Row key={key}>
            <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
              <div className="role-group">
                <h2>{roleGroup.title}</h2>
                <Row>
                  {roleGroup.members.map((member, key) => (
                    <Col xs={12} sm={6} lg={4} key={key}>
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
        order
      }
    }
    allDatoCmsMember(filter: $filter) {
      nodes {
        name
        description
        contact
        image: photo {
          fixed(width: 150, height: 150, imgixParams: {faceindex: 1, facepad: 3, fit: "facearea"}) {
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
