import React, { useState } from 'react';
import ArrowDown from '../../assets/svg/arrow-down.svg';
import onClickOutside from 'react-onclickoutside';

import './labnavigation.scss';
import '../Button/button.scss';

const LabNavigation = ({ labs, slug }) => {
  labs = [...labs, { title: 'All groups', slug: null }];
  const activeLab = labs.find((lab) => lab.slug === slug);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  LabNavigation.handleClickOutside = () => setIsMenuVisible(false);

  return (
    <div className="labnavigation">
      <button
        className="btn btn--small"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        {activeLab.title}
        <ArrowDown />
      </button>
      {isMenuVisible && (
        <ul className="labnavigation_menu" role="menu" aria-label="Change lab">
          {labs
            .filter((lab) => lab !== activeLab)
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((lab, key) => (
              <li key={key}>
                <a
                  className="labnavigation_menu-item"
                  role="menuitem"
                  tabIndex={key}
                  href={`/${lab.slug || ''}`}
                  onClick={() =>setIsMenuVisible(false)}
                >
                  {lab.title}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => LabNavigation.handleClickOutside
};

export default onClickOutside(LabNavigation, clickOutsideConfig);
