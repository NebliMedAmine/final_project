import { createStore } from "redux";
import { ProductReducer } from "./reducer";

const store = createStore(ProductReducer);
export default store;
