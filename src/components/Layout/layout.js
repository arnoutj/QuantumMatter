import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Grid } from 'react-flexbox-grid';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import '../../styles/global.scss';
import './layout.scss';

const labThemeClasses = {
  "null": "theme-purple",
  "golden": "theme-cyan",
  "van-heumen": "theme-orange",
  "de-visser": "theme-green"
};

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
        allDatoCmsLab {
          nodes {
            title
            slug
          }
        }
      }
    `}
    render={(data) => (
      <div className={`page-container ${labThemeClasses[pageContext ? pageContext.slug : null]}`}>
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <Header pageContext={pageContext} labs={data.allDatoCmsLab.nodes}/>
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
