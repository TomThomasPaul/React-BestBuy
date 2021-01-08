import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import {AddItem} from '../../redux/cart/cart-action';

const CollectionItem =({item,addItem})=>{
const {name,price,imageUrl} = item;
//const itemToAdd = {...item,quantity : 1} ;
return <div className='collection-item'>
<div className='image' style={{backgroundImage : `url(${imageUrl})`}}></div>
<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>

</div>
<CustomButton inverted onClick ={()=>addItem(item)}> ADD TO CART</CustomButton>

</div>




};

const mapDispatchToProps=(dispatch)=>{

return {
    addItem : (item)=>dispatch(AddItem(item))
}


}
export default connect(null,mapDispatchToProps)(CollectionItem);