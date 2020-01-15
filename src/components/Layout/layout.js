import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import '../../styles/global.scss';
import './layout.scss';
import ScrollButton from '../ScrollButton/scrollButton';
import darken from '../../utils/color';

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
            subtitle
            slug
            color {
              hex
            }
          }
        }
        datoCmsHome {
          color {
            hex
          }
        }
      }
    `}
    render={(data) => {
      const currentLab = pageContext ? data.allDatoCmsLab.nodes.find(lab => lab.slug === pageContext.slug) : null;
      const hexColor = currentLab ? currentLab.color.hex : data.datoCmsHome.color.hex;
      const colorVariables = `
        :root {
          --color-primary: ${hexColor};
          --color-primary-d10: ${darken(hexColor, 10)};
        }
      `;
      
      return (
        <div className="page-container">
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
            <style>{colorVariables}</style>
          </HelmetDatoCms>
          <Header pageContext={pageContext} labs={data.allDatoCmsLab.nodes}/>
          <main role="main">
            {children}
          </main>
          <Footer />
          <ScrollButton />
        </div>
      );
    }}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
