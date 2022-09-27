import { ADD_TO_CART} from "./actionTypes";

  
export function addToCartAction(payload) {
    
    return {
      type: ADD_TO_CART,     
      payload
    };
  }
 