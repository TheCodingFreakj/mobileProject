import PRODUCTS from "../../data/data";
import DELETE_PRODUCT from "../actions/product";
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.id
        ),

        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.id
        ),
      };
  }
  return state;
};
