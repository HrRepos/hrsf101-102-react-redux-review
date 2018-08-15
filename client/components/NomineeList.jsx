import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({nominees, vote}) => (
  <div>
    { nominees.map(nominee => (<Nominee nominee={nominee} vote={vote}/> )) }
  </div>
);

export default NomineeList;
