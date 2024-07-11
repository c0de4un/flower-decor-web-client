// Actions
const SET_CART = 'cart/SET_CART';

// State
export interface CartState {
  size: number;
}

// Action Creators
export const setCart = (cart: object) => ({
  type: SET_CART as typeof SET_CART,
  payload: cart
});

const initialState: CartState = {
  size: 0
};

// Reducer
export const cartReducer = (state = initialState, action: ReturnType<typeof setCart>): CartState => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
