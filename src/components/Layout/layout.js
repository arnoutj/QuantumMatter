import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Logo from '../../assets/svg/logo.svg';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Grid, Row, Col } from 'react-flexbox-grid';

import '../../styles/global.scss';
import './layout.scss';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
      }
    `}
    render={(data) => (
      <Grid>
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <Row>
          <Col xs={12}>
            <Link to="/" alt={data.datoCmsSite.globalSeo.siteName}>
              <Logo width="250" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Grid>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
