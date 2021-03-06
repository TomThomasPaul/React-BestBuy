import {CartTypes} from './cart-types.js';
import {addItemToCart} from './cart.utils.js'
import {removeItemFromCheckout} from './cart.utils.js';

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

case CartTypes.REMOVE_CART_ITEM : return {

...state,
cartItems : state.cartItems.filter((item)=>item.id!==action.payload.id)

};

case CartTypes.REMOVE_ITEM :{
    const cartItems = removeItemFromCheckout(state.cartItems,action.payload);
    
    return {


    ...state,
    cartItems
}
};

default : return state ;
}


}

export default cartReducer;