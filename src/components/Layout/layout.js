import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Logo from '../../assets/svg/logo.svg';
import { HelmetDatoCms } from 'gatsby-source-datocms';

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
      <div className="container">
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <div className="header">
          <Link to="/" alt={data.datoCmsSite.globalSeo.siteName}>
            <Logo width="250" />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
