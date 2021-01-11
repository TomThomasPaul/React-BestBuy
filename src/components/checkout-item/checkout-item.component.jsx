import React from "react";
import {RemoveCartItem} from "../../redux/cart/cart-action";
import {connect} from "react-redux";

import "./checkout-item.styles.scss";


const CheckoutItem = ({cartItem, removeCartItem})=>{
const {name,price,imageUrl,quantity} =cartItem;
return <div className="checkout-item">

          <div className="image-container">
            <img  src={imageUrl} alt="item"></img>
          </div>

          <span className="name">{name}</span>
          <span className="quantity">{quantity}</span>
          <span className="price">{price}</span>
          
          <div className = "remove-button" onClick={()=>removeCartItem(cartItem)}>&#10005;</div>
      
</div>


}

const mapDispatchToProps=(dispatch)=>{
return {
    removeCartItem : item=>dispatch(RemoveCartItem(item))
}


}

export default connect(null,mapDispatchToProps)(CheckoutItem);