import React from 'react';
import Nominee from './Nominee';
import store from '../store';

class NomineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    const nominees = this.state.nominees;
    return (
      <div>
        { nominees.map(nominee => (<Nominee nominee={nominee} /> )) }
      </div>
    )
  }
}

export default NomineeList;
