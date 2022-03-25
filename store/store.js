
import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import productReducer from "./reducers/product";
import cartReducer from "./reducers/cart"
import orderReducer from "./reducers/order"
const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer,
  orders:orderReducer
});

export const store = createStore(rootReducer,composeWithDevTools());