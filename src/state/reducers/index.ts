import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import BundlesReducer from "./bundlesReducer";

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: BundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
