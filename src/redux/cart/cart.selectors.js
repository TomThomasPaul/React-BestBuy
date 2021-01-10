import React from 'react';

import {createSelector} from 'reselect';

export const selectCart = state=>{
    
    return state.cart };

export const selectCartItems = createSelector(
[selectCart],
(cart)=>{
    console.log("inside items output selector");
    return cart.cartItems;

}


);

export const selectCartHidden = createSelector(
[selectCart],
(cart)=>cart.hidden

);


export const selectCartItemsCount = createSelector(
    
[selectCartItems],
(cartItems)=>{
    console.log("inside itemcount output selector");
    return cartItems.reduce(((acc,item)=>acc + item.quantity),0)}

);