import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{

    const priceForStripe = price * 100 ;
    const publishableKey= 'pk_test_51IBv45C9XRtO3ONSjEvMcYX8MlNzYg8qdjGMI9uGuJd2NSUQHdjvILH9XJcNYos2srmJkl6paILrmLJJsaRxffwS00byVgcmRJ';
    const onToken =token=>{

        console.log(token);
        alert("Payment Successful");
    }
    return (


        <StripeCheckout 
          label="Pay Now"
          name="BestBuy" 
          shippingAddress
          billingAddress
          amount={priceForStripe}
          description={`Your total is $${price}`}
          image="https://sendeyo.com/up/d/f3eb2117da"
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        
        
        
        
        />
    )






}

export default StripeCheckoutButton;