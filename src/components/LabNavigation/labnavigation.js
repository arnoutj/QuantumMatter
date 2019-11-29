import React from 'react';

import './labnavigation.scss';

const LabNavigation = ({ activeLab }) => (
  <div>{activeLab ? activeLab : 'All groups'}</div>
);
  
export default LabNavigation;
