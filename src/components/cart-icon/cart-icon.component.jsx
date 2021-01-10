import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {ToggleCart} from  '../../redux/cart/cart-action';
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon = (props)=>{

return <div className='cart-icon' onClick ={props.ToggleCart}>

<ShoppingIcon className='shopping-icon'></ShoppingIcon>
<span className='item-count'>{props.itemCount}</span>



</div>


}

const mapDispatchToProps = (dispatch)=>{

    return {
      ToggleCart : ()=>dispatch(ToggleCart())
    
      }
    }

const mapStateToProps = createStructuredSelector({

itemCount : selectCartItemsCount 
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);