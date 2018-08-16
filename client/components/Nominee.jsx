import React from 'react';
import store from '../store';

const Nominee = ({ nominee}) => {
  return (
    <div>
      <span onClick={() => store.dispatch({type: 'VOTE', payload: nominee.name})}>✅</span>
      { nominee.name }
    </div>
  )
};

export default Nominee;
