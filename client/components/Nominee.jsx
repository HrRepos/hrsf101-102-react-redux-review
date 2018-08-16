import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: () => dispatch({type: 'VOTE', payload: ownProps.nominee.name })
});

const Nominee = ({ nominee, vote}) => {
  return (
    <div>
      <span onClick={vote}>✅</span>
      { nominee.name }
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominee);
