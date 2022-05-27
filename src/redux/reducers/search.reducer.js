const searchResults = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
      case 'SEARCH_RESULTS':
        return action.payload
      default:
        return state
    }
  };
  
  export default searchResults;