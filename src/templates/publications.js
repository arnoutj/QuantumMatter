import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Section from '../components/Section/section';
import Message from '../components/Message/message';
import PublicationList from '../components/PublicationList/publicationList';

export default ({ data, pageContext }) => (
  <Layout pageContext={pageContext}>
    <Section>
      <PublicationList publications={data.allDatoCmsPublication} />
      <Message
        showIfEmpty={{
          data: data.allDatoCmsPublication.group,
          type: 'publications'
        }}
      />
    </Section>
  </Layout>
);

export const query = graphql`
  query PublicationQuery($filter: DatoCmsPublicationFilterInput) {
    allDatoCmsPublication(filter: $filter) {
      group(field: year) {
        year: fieldValue
        nodes {
          title
          author
          journal
          year
          url
          thumbnail {
            fixed(width: 100) {
              aspectRatio
              width
              height
              src
            }
          }
          thesis
        }
      }
    }
  }
`;

export const query = graphql`
  query PublicationQuery($filter: DatoCmsPublicationFilterInput) {
    allDatoCmsPublication(filter2: $filter) {
      group(field: year) {
        year: fieldValue
        nodes {
          title
          author
          journal
          year
          url
          thumbnail {
            fixed(width: 100) {
              aspectRatio
              width
              height
              src
            }
          }
          thesis
        }
      }
    }
  }
`;
