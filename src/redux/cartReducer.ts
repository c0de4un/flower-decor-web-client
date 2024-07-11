// cartReducer.ts

// Define the initial state of the cart
interface CartState {
  numberOfItems: number;
}

const initialState: CartState = {
  numberOfItems: 0,
};

// Define the action types
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

// Define the action creators
export const addItem = () => ({ type: ADD_ITEM });
export const removeItem = () => ({ type: REMOVE_ITEM });

// Define the cart reducer
export const cartReducer = (state = initialState, action: { type: string }): CartState => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, numberOfItems: state.numberOfItems + 1 };
    case REMOVE_ITEM:
      return { ...state, numberOfItems: Math.max(0, state.numberOfItems - 1) };
    default:
      return state;
  }
};
