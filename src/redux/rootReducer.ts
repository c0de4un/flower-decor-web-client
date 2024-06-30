import { combineReducers, Reducer } from "redux";

export interface RootState {
  dummy: string;
}

// Dummy reducer
const dummyReducer = (state = '') => {
  return state;
};

export const rootReducer: Reducer<RootState> = combineReducers({
  dummy: dummyReducer
});
