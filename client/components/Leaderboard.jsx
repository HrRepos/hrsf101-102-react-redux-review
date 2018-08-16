import React from 'react';
import store from '../store';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    const nominees = this.state.nominees;
    const total = nominees.reduce((accum, nominee) => accum + nominee.votes, 0);
    const formatPercentage = (num) => isNaN(num) ? '' : `${(num * 100).toFixed(0)}%`;
    const getPercentage = (part, total) => formatPercentage(part / total);

    return (
      <div className="votes">
        { nominees.map(nominee => 
          (<div className="vote">{getPercentage(nominee.votes, total)} { nominee.name }</div>)
          )
        }
      </div>
    )
  }
};

export default Leaderboard;
