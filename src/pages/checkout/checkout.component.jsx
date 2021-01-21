import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartTotal} from "../../redux/cart/cart.selectors";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({cartItems,total})=>{

    return <div className="checkout-page">
                  <div className="checkout-header">
                      <div className="header-block">
                          <span>PRODUCT</span>
                      </div>

                      <div className="header-block">
                      <span>DESCRIPTION</span>
                      </div>

                      <div className="header-block">
                       <span>QUANTITY</span>
                      </div >

                      <div className="header-block">
                      <span>PRICE</span>
                      </div>

                      <div className="header-block">
                      <span>REMOVE</span>
                      </div>

                  </div>
                  
                  { 
                  cartItems.map((cartItem)=> {
                    console.log(cartItems);
                     return <CheckoutItem key={cartItem.id} quant={cartItem.quantity}  cartItem={cartItem}/>;  //
                    }
                      
                      )
                    
                  
                  } 
                <div className ="total">
                    <span>TOTAL ${total}</span>
                </div>
                <div className="test-warning">
                    *Please use the following credit card details for test* 
                    <br/>
                    Card Number - 4242 4242 4242 4242 - Expiry - 1/21 CVV - 123
                </div>
                <StripeCheckoutButton price={total}/>


            </div>
}

const mapStateToProps=createStructuredSelector({
 cartItems : selectCartItems,
 total : selectCartTotal

});

export default connect(mapStateToProps) (CheckoutPage);