import CartItem from '../models/CartItem.ts';

// Define the initial state of the cart
export interface CartState {
  numberOfItems: number;
  items: CartItem[];
}

const initialState: CartState = {
  numberOfItems: 0,
  items: []
};

// Define the action types
export const SET_CART = 'SET_CART';

// Define the action creators
export const setCart = (item: CartItem) => ({ type: SET_CART, payload: item });

// Define the cart reducer
export const cartReducer = (state = initialState, action: { type: string }): CartState => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        numberOfItems: state.numberOfItems,
        items: state.items
      };
    default:
      return state;
  }
};
