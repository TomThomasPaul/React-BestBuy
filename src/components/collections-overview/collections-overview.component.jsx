import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import "./collections-overview.component.jsx";
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../collections-preview/collections-preview.component';


const CollectionsOverview =({collections})=>{

    return <div className='collections-overview'>

    {collections.map(({id,...otherCollectionProps})=>{
    
      return <CollectionPreview key ={id} {...otherCollectionProps}></CollectionPreview>
    
    })}
    
    
    
    </div>




}

const mapStateToProps=createStructuredSelector({

    collections : selectCollectionsForPreview
    
    });

    export default connect(mapStateToProps)(CollectionsOverview);