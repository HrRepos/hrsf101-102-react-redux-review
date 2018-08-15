import React from 'react';
import Leaderboard from './Leaderboard';
import NomineeList from './NomineeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: [
        {
          name: 'React',
          votes: 0,
        },
        {
          name: 'Angular',
          votes: 0,
        },
        {
          name: 'jQuery',
          votes: 0,
        }
      ],
    }
    this.vote = this.vote.bind(this);
  }

  vote (name) {
    const updatedNominees = this.state.nominees.map(nominee => {
      if(nominee.name === name) {
        return {
          name: nominee.name,
          votes: nominee.votes + 1,
        }
      } else {
        return nominee;
      }
    });
    this.setState({
      nominees: updatedNominees,
    });
  }

  render() {
    return (
      <div>
        <Leaderboard nominees={this.state.nominees}/>
        <NomineeList nominees={this.state.nominees} vote={this.vote}/>
      </div>
    );
  }

}

export default App;
