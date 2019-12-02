import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from '../Navigation/navigation';
import LabNavigation from '../LabNavigation/labnavigation';

import './header.scss';

const Header = ({ labs, pageContext }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <div className="header">
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="header_wrapper">
                <Link to="/" alt={data.datoCmsSite.globalSeo.siteName}>
                  <Logo width="250" />
                </Link>
                <LabNavigation labs={labs} slug={pageContext ? pageContext.slug : null } />
                <Navigation slug={pageContext ? pageContext.slug : null} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
  />
);

export default Header;
