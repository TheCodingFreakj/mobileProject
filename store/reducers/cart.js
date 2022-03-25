import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_CARTITEMS,
} from "../actions/cart";
import { ADD_ORDER } from "./order";
import { DELETE_PRODUCT } from "../actions/product";
import CartItem from "../../models/cartItem";
const initialState = {
  items: {},
  totalAmount: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodId = addedProduct.id;
      if (state.items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      }

    case ADD_ORDER:
      return initialState;

    case GET_ALL_CARTITEMS:
      return {
        ...state,
        items: state.items,
      };

    case DELETE_PRODUCT:
      if (!state.items[action.id]) {
        return state;
      }
      const updateditemsincart = { ...state.items };

      const itemtotal = state.items[action.id].sum;
      delete updateditemsincart[action.id];

      return {
        ...state,
        items: updateditemsincart,
        totalAmount: state.totalAmount - itemtotal,
      };

    case REMOVE_FROM_CART:
      const selected = state.items[action.pid];

      const currentQuant = state.items[action.pid].quantity;
      //console.log("currentQuant", currentQuant)
      let updateditems;
      if (currentQuant > 1) {
        const updateditem = new CartItem(
          state.items[action.pid].quantity - 1,
          state.items[action.pid].prodPrice,
          state.items[action.pid].prodTitle,
          state.items[action.pid].sum - state.items[action.pid].prodPrice
        );

        updateditems = { ...state.items, [action.pid]: updateditem };
      } else {
        updateditems = { ...state.items };
        delete updateditems[action.pid];
        // console.log("after delete", updateditems);
      }

      return {
        ...state,
        items: updateditems,
        totalAmount: state.totalAmount - selected.prodPrice,
      };
  }
  return state;
};
