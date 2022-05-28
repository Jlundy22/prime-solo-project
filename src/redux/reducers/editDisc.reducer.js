const editDisc = (state = [], action) => {
    switch (action.type) {
      case 'SET_EDIT_DISC':
        return action.payload
      default:
        return state
    }
  };
  
  export default editDisc;