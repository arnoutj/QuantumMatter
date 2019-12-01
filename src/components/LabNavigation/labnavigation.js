import React from 'react';
import ArrowDown from '../../assets/svg/arrow-down.svg';
import './labnavigation.scss';
import '../Button/button.scss';

const LabNavigation = ({ activeLab }) => (
  <div className="labnavigation">
    <button className="btn btn--small">
      {activeLab ? activeLab : 'All groups'}
      <ArrowDown />
    </button>
  </div>
);
  
export default LabNavigation;
