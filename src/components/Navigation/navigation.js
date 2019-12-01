import React from 'react';

import './navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [ //@TODO: make dynamic
        {
          slug: 'members',
          label: 'Members'
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
        },
      ]
    };
  }

  getUrl(path, generalPage) {
    return this.props.slug && !generalPage ? `/${this.props.slug}/${path}` : `/${path}`;
  }

  render() {
    return (
      <nav className="navigation" role="navigation">
        <ul className="menu" role="menubar" aria-label="Navigation">
          {this.state.menuItems.map((item, key) => (
            <li key={key}>
              <a
                className="menu_item"
                role="menuitem"
                tabIndex={key}
                href={this.getUrl(item.slug, item.generalPage)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
