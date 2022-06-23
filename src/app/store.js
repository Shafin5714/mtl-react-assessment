import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const store = configureStore({
    reducer:{
        product: productReducer,
        cart:cartReducer,
        user:userReducer
    },
    preloadedState: {
        user: {
           userInfo: userInfoFromStorage
        }
    }
})

export default store