import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Grid } from 'react-flexbox-grid';

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
      <div className="page-container theme-purple">
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <Header pageContext={pageContext} />
        <main role="main">
          <Grid>
            {children}
          </Grid>
        </main>
        <Footer />
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
