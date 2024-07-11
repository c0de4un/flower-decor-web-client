// rootReducer.ts

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';

// Combine all reducers into a single root reducer
export const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
