import React from 'react';

const Nominee = ({nominee, vote}) => (
  <div>
    <span onClick={() => vote(nominee.name)}>✅</span>
    { nominee.name }
  </div>
);

export default Nominee;
