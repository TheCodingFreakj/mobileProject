export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ALL_CARTITEMS = "GET_ALL_CARTITEMS";


export const addToCart = (product) => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = (productid) => {
  return { type: REMOVE_FROM_CART, pid: productid.toString() };
};

export const getAllCartItems = (payload) => {
  return { type: GET_ALL_CARTITEMS, payload };
};

// export function someAction() {
//   return (dispatch, getState) => {
//     const {items} = getState().cart;

//     dispatch(anotherAction(items));
//   }
// }
