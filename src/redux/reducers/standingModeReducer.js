const standingMode = (state = 'PRONE', action) => {
// Use a switch statement to account for synonyms
  switch (action.type) {
    case 'STAND':
      return 'STAND';
    case 'RISE':
      return 'STAND';
    case 'GET':
      // Use action.payload for all words entered, that way I can check the
      // second, third, etc words to find required combinations
      switch (action.payload[1]) {
        case 'UP':
          return 'STAND'
        case 'DOWN':
          return 'PRONE'
      }

    case 'KNEEL':
      return 'KNEEL'

    case 'PRONE':
      return 'PRONE';

    default:
      return state;
  }
};

// standingMode will be on the redux state at:
// reduxState.standingMode
export default standingMode;
