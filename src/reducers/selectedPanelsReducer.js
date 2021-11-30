const initialState = [
  // {
  //   name: "",
  //   component: "",
  //   width: 0,
  //   height: 0,
  // },
];

const selectedPanelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SELECTED_PANEL":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default selectedPanelsReducer;
