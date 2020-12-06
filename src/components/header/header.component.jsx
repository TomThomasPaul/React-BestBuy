import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header=({currentUser,hidden})=>{

return <div className ='header'>

{console.log("currentUser IN HEADER COMPONENT")}
{console.log(currentUser)}
<Link className='logo-container' to='/'>
  <Logo className='logo'></Logo>
</Link>


<div className='options'>
<Link className='option' to='/shop'>SHOPS</Link>
<Link className='option' to='/shop'>CONTACT</Link>
{
currentUser? 
(<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> )
: 
(<Link className='option' to='/signIn'>SIGN IN</Link>)

}
<CartIcon ></CartIcon>
</div>

{hidden?null : <CartDropdown></CartDropdown> }


</div>



}



const mapStateToProps = ({user : {currentUser}, cart : {hidden}})=>{ //state is root reducer or combinedReducers in this case
  
  return {
    currentUser ,
    hidden       
    
    
  }
}

export default connect(mapStateToProps)(Header); 