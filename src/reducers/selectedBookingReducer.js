const selectedBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SELECTED_BOOKING":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default selectedBookingReducer;
