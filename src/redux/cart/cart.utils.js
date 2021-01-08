//wrote own util function to add quantity and check if cart already ha sthe same item and update accordingly

export const addItemToCart = (cartItems,itemToAdd)=>{
itemToAdd.quantity =1; //introduce quantity here
let itemExists=false; 

if(cartItems.length){ cartItems.forEach((item,i)=>{
    
    if(item.id===itemToAdd.id){

        itemExists=true;
        cartItems[i].quantity+=1;
       
    }
});
}
 if(itemExists){

return [...cartItems]


 }else {

    return [...cartItems,itemToAdd]
 }


}

