import React from 'react';

import './labnavigation.scss';

const LabNavigation = ({ activeLab }) => (
  <div className="labnavigation">{activeLab ? activeLab : 'All groups'}</div>
);
  
export default LabNavigation;
