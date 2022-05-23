const discs = (state = [], action) => {
    switch (action.type) {
      case 'SET_DISCS':
        return action.payload
      default:
        return state
    }
  };
  
  export default discs;