import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from '../Navigation/navigation';
import LabNavigation from '../LabNavigation/labnavigation';
import Logo from '../Logo/logo';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavigationIsVisible: false
    };
  }

  toggleNavigation() {
    this.setState({
      mobileNavigationIsVisible: !this.state.mobileNavigationIsVisible
    });
  }

  render() {
    const { data, labs, pageContext } = this.props;
    const { mobileNavigationIsVisible } = this.state;
    const url = pageContext && pageContext.slug ? pageContext.slug : ``;
    return (
      <div className={`header ${mobileNavigationIsVisible ? 'mobile-nav-visible' : ''}`}>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="header_wrapper">
                <Link to={`/${url}`} alt={data.datoCmsSite.globalSeo.siteName}>
                  <Logo 
                    labs={labs}
                    slug={pageContext ? pageContext.slug : null}
                  />
                </Link>
                <LabNavigation
                  labs={labs}
                  slug={pageContext ? pageContext.slug : null}
                />
                <Navigation
                  slug={pageContext ? pageContext.slug : null}
                  mobileNavigationIsVisible={mobileNavigationIsVisible}
                  toggleNavigation={() => this.toggleNavigation()}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default (props) => (
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
    render={(data) => <Header data={data} {...props} />}
  />
);
