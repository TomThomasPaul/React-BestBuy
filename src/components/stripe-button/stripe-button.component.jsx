import React from "react";
import StripeCheckout from "react-stripe-checkout";

import {ReactComponent as Logo} from "../../assets/crown.svg";

const StripeCheckoutButton = ({price})=>{

    const priceForStripe = price * 100 ;
    const publishableKey= 'pk_test_51IBv45C9XRtO3ONSjEvMcYX8MlNzYg8qdjGMI9uGuJd2NSUQHdjvILH9XJcNYos2srmJkl6paILrmLJJsaRxffwS00byVgcmRJ';
    const onToken =token=>{

        console.log(token);
        alert("Payment Successful");
    }
    return (

        //stripe checkout
        <StripeCheckout 
          label="Pay Now"
          name="BestBuy" 
          shippingAddress
          billingAddress
          amount={priceForStripe}
          description={`Your total is $${price}`}
         // image="https://i.etsystatic.com/24957288/r/il/d8b89d/3085970309/il_794xN.3085970309_skur.jpg"
         image="favicon.ico"
           
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        
        
        
        
        />
    )






}

export default StripeCheckoutButton;