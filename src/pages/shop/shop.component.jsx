import React from 'react';
//import SHOP_DATA from './shop.data';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../../components/collections-preview/collections-preview.component';

// class ShopPage extends React.Component{ //changing to functional component coz of transferring collections to redux.  same with directory

// constructor(props){
// super(props);

// this.state={
//     collections : SHOP_DATA
// }
// }

const ShopPage = ({collections})=>{


//const {collections} = this.state;
return <div className='shop-page'>

{collections.map(({id,...otherCollectionProps})=>{

  return <CollectionPreview key ={id} {...otherCollectionProps}></CollectionPreview>

})}



</div>
      


}


const mapStateToProps=createStructuredSelector({

collections : selectShopCollections

});

export default connect(mapStateToProps)(ShopPage);