import {CartTypes} from './cart-types';

export const ToggleCart = ()=>{
 
 return  { type : CartTypes.TOGGLE_CART_HIDDEN

 }



}

export const AddItem = (item)=>{

return {

type : CartTypes.ADD_ITEM,
payload : item


}


}