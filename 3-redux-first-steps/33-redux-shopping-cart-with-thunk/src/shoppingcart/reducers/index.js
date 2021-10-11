import { ADD_TO_CART, CHECKOUT_SUCCESS } from "../constants";

const initialState = {
  products: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;
      let quantity = 0;

      if (state.products[productId]) {
        quantity = state.products[productId];
      }

      quantity++;

      return {
        ...state,
        products: { ...state.products, [action.product.id]: quantity },
      };

    case CHECKOUT_SUCCESS:
      return { products: {} }
    default:
      return state;
  }
};

export default reducer;
