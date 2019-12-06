import React from 'react';
import { Link } from 'gatsby';
import './navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        //@TODO: make dynamic
        {
          slug: 'members',
          label: 'Members',
          labPage: true
        },
        {
          slug: 'highlights',
          label: 'Highlights'
        },
        {
          slug: 'research',
          label: 'Research',
          labPage: true
        },
        {
          slug: 'publications',
          label: 'Publications'
        },
        {
          slug: 'news',
          label: 'News'
        },
        {
          slug: 'media',
          label: 'Media',
          generalPage: true
        },
        {
          slug: 'contact',
          label: 'Contact',
          generalPage: true
        }
      ]
    };
  }

  getUrl(path, generalPage) {
    return this.props.slug && !generalPage
      ? `/${this.props.slug}/${path}`
      : `/${path}`;
  }

  render() {
    return (
      <nav className="navigation" role="navigation">
        <ul className="navigation_menu" role="menubar" aria-label="Navigation">
          {this.state.menuItems
            .filter((item) => (this.props.slug ? !item.generalPage : !item.labPage))
            .map((item, key) => (
              <li key={key}>
                <Link
                  to={this.getUrl(item.slug, item.generalPage)}
                  partiallyActive={true}
                  className="navigation_menu-item"
                  activeClassName="is-active"
                  role="menuitem"
                  tabIndex={key}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
        <button
          className="navigation-toggle"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="false"
          onClick={this.props.toggleNavigation}
        >
          <span className="navigation-toggle-box">
            <span className="navigation-toggle-inner"></span>
          </span>
        </button>
      </nav>
    );
  }
}

export default Navigation;
