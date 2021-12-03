const selectedBowserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SELECTED_BOWSER":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default selectedBowserReducer;
