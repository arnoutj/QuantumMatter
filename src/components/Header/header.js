import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from '../Navigation/navigation';
import LabNavigation from '../LabNavigation/labnavigation';

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

    return (
      <div className={`header ${mobileNavigationIsVisible ? 'mobile-nav-visible' : ''}`}>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="header_wrapper">
                <Link to="/" alt={data.datoCmsSite.globalSeo.siteName}>
                  <Logo className="header_logo" width="190" />
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
