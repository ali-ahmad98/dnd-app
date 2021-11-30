import { combineReducers } from "redux";
import selectedPanelsReducer from "./selectedPanelsReducer";

const rootReducer = combineReducers({
  selectedPanels: selectedPanelsReducer,
});

export default rootReducer;
