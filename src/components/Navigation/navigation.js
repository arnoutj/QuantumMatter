import React from 'react';

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
    //{`navigation-toggle ${this.props.mobileNavigationIsVisible ? 'is-active' : ''}`}
    return (
      <nav className="navigation" role="navigation">
        <ul className="navigation_menu" role="menubar" aria-label="Navigation">
          {this.state.menuItems
            .filter((item) => (this.props.slug ? true : !item.labPage))
            .map((item, key) => (
              <li key={key}>
                <a
                  className="navigation_menu-item"
                  role="menuitem"
                  tabIndex={key}
                  href={this.getUrl(item.slug, item.generalPage)}
                >
                  {item.label}
                </a>
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
