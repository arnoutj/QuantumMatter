import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { HelmetDatoCms } from 'gatsby-source-datocms';
import Header from '../Header/header';
import { Grid, Row, Col } from 'react-flexbox-grid';

import '../../styles/global.scss';
import './layout.scss';
import Footer from '../Footer/footer';

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
      <div className="page-container">
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
