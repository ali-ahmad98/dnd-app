import { combineReducers } from "redux";
import selectedPanelsReducer from "./selectedPanelsReducer";
import selectedBookingReducer from "./selectedBookingReducer";
import selectedBowserReducer from "./selectedBowserReducer";

const rootReducer = combineReducers({
  selectedPanels: selectedPanelsReducer,
  selectedBooking: selectedBookingReducer,
  selectedBowser: selectedBowserReducer,
});

export default rootReducer;
