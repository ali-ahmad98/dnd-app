// ACTIONS - addSelectedPanel
export const addSelectedPanel = (allPanels) => {
  return {
    type: "ADD_SELECTED_PANEL",
    payload: allPanels,
  };
};

// ACTIONS - addSelectedBooking
export const addSelectedBooking = (selectedBooking) => {
  return {
    type: "ADD_SELECTED_BOOKING",
    payload: selectedBooking,
  };
};
// ACTIONS - addSelectedBowser
export const addSelectedBowser = (selectedBowser) => {
  return {
    type: "ADD_SELECTED_BOWSER",
    payload: selectedBowser,
  };
};
