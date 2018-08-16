import React from 'react';
import Nominee from './Nominee';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  nominees: state.nominees,
});

const NomineeList = ({nominees}) => (
  <div>
    { nominees.map(nominee => (<Nominee nominee={nominee} /> )) }
  </div>
);

export default connect(mapStateToProps)(NomineeList);
