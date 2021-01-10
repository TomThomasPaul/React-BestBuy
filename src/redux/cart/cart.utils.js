//wrote own util function to add quantity and check if cart already ha sthe same item and update accordingly

export const addItemToCart = (cartItems,itemToAdd)=>{

let itemExists=false; 

if(cartItems.length){ cartItems.forEach((item,i)=>{
    
    if(item.id===itemToAdd.id){
      console.log("item exists");
        itemExists=true;
        cartItems[i].quantity+=1;
       
    }
});
}
 if(itemExists){
console.log(cartItems);
return [...cartItems]


 }else {
    itemToAdd.quantity =1; //introduce quantity here
    return [...cartItems,itemToAdd]
 }


}

// export const calcTotalCartItems =(cartItems)=>{  own method to calc count before reselect

// return cartItems.reduce((acc,item)=>{
//   return   acc + item.quantity ;

// },0);


// }

