import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import pizzaReducer from "./pizzaReducers";
import {signInReducer,signUpReducer} from './authReducer'
import { addressReducer } from "./addressReducer";
import { orderReducer,orderDetail, searchItems } from "./odersReducer";
export default combineReducers({
    allPizza:pizzaReducer,
    cart:cartReducer,
    user:signInReducer,
    userRegister:signUpReducer,
    address:addressReducer,
    order:orderReducer,
    orderDetails:orderDetail,
})