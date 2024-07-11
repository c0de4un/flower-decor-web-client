import { combineReducers, Reducer } from 'redux';
import { CartState, cartReducer } from './cartReducer.ts';

export interface RootState {
  dummy: string;
  cart: CartState;
}

// Dummy reducer
const dummyReducer = (state = '') => {
  return state;
};

export const rootReducer: Reducer<RootState> = combineReducers({
  dummy: dummyReducer,
  cart: cartReducer,
});
