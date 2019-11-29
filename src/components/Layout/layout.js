import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import '../../styles/global.scss';
import './layout.scss';

const TemplateWrapper = ({ children, pageContext }) => (
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
        <Header pageContext={pageContext} />
        <main role="main">{children}</main>
        <Footer />
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
