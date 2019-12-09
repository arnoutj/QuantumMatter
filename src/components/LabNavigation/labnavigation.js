import React, { useState, useRef } from 'react';
import useOutsideClick from '../../utils/clickoutside';
import ArrowDown from '../../assets/svg/arrow-down.svg';

import './labnavigation.scss';

const LabNavigation = ({ labs, slug }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const ref = useRef();

  labs = [...labs, { title: 'All groups', slug: null }];
  const activeLab = labs.find((lab) => lab.slug === slug);

  useOutsideClick(ref, () => setIsMenuVisible(false));

  return (
    <div className="labnavigation" ref={ref}>
      <button
        className="btn btn--small"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <span>{activeLab.title}</span>
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

export default LabNavigation;
