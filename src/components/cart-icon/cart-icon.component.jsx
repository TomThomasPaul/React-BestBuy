import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {ToggleCart} from  '../../redux/cart/cart-action';


const CartIcon = (props)=>{

return <div className='cart-icon' onClick ={props.ToggleCart}>

<ShoppingIcon className='shopping-icon'></ShoppingIcon>
<span className='item-count'>0</span>



</div>


}

const mapDispatchToProps = (dispatch)=>{

    return {
      ToggleCart : ()=>dispatch(ToggleCart())
    
      }
    }

export default connect(null,mapDispatchToProps)(CartIcon);