const myDiscs = (state = [], action) => {
    switch (action.type) {
      case 'SET_MY_DISCS':
        return action.payload
      default:
        return state
    }
  };
  
  export default myDiscs;