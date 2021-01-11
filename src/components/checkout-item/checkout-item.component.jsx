import React from "react";
import {RemoveCartItem} from "../../redux/cart/cart-action";
import {RemoveItem} from "../../redux/cart/cart-action";
import {AddItem} from "../../redux/cart/cart-action";
import {connect} from "react-redux";


import "./checkout-item.styles.scss";


const CheckoutItem = ({cartItem,removeCartItem,removeItem,addItem})=>{
const {name,price,imageUrl,quantity} =cartItem;
console.log(quantity);

return (<div className="checkout-item">

          <div className="image-container">
            <img  src={imageUrl} alt="item"></img>
          </div>

          <span className="name">{name}</span>
          <span className="quantity">
              <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
              </span>
          <span className="price">{price}</span>
          
          <div className = "remove-button" onClick={()=>removeCartItem(cartItem)}>&#10005;</div>
      
</div>
)

}



const mapDispatchToProps=(dispatch)=>{
return {
    removeCartItem : item =>dispatch(RemoveCartItem(item)),
    removeItem : item =>dispatch(RemoveItem(item)),
    addItem : item=>dispatch(AddItem(item))
}


}


export default connect(null,mapDispatchToProps)(CheckoutItem);