export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems, cartTotal) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: cartTotal },
  };
};
