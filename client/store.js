import { createStore } from 'redux';

// state looks like
const initialState = 
  {
    nominees: [
      {
        name: 'React',
        votes: 5,
      },
      {
        name: 'Angular',
        votes: 10,
      },
      {
        name: 'jQuery',
        votes: 8,
      }
    ],
  };


//  action looks like
/*
  {
    type: 'VOTE',
    payload: 'Angular'
  }
*/

// create reducer
const reducer = (previousState, action) => {
  console.log('state', previousState);
  if(previousState === undefined) {
    previousState = initialState;
  }
  if(action.type === 'VOTE') {
    const newState = {};
    const newNominees = previousState.nominees.map(nominee => {
      if(nominee.name === action.payload) {
        return {
          name: nominee.name,
          votes: nominee.votes + 1,
        }
      } else {
        return nominee;
      }
    })
    newState.nominees = newNominees;
    return newState;
  } else {
    return previousState;
  }
}


// create store

const store = createStore(reducer);

export default store;
