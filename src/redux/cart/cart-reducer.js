import {CartTypes} from './cart-types.js';
import {addItemToCart} from './cart.utils.js'

const INITIAL_STATE={

hidden : true,
cartItems : []
//totalCartItems : 0  own method before using reselect 
}

const cartReducer = (state=INITIAL_STATE, action)=>{

switch(action.type){

case CartTypes.TOGGLE_CART_HIDDEN : return {
 ...state,
 hidden : !state.hidden

 

};

case CartTypes.ADD_ITEM : {
const cartItems = addItemToCart(state.cartItems, action.payload);
//const totalCartItems =    calcTotalCartItems(cartItems);
return {

...state,
//cartItems : [...state.cartItems, action.payload]
cartItems
//totalCartItems

}

};

default : return state ;
}


}

export default cartReducer;