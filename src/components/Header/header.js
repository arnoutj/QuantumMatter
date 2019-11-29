import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './header.scss';

const Header = () => (
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
              <Link to="/" alt={data.datoCmsSite.globalSeo.siteName}>
                <Logo width="250" />
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
  />
);

export default Header;
