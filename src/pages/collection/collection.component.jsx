import React from "react";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop-selectors";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";


const CollectionPage =({collection})=>{
console.log(collection);// MATCH IS PASSED BY THE ROUTE IN SHOP COMPONENT
const {title,items} = collection;
return <div className="collection-page">

<h1 className="title">{title}</h1>
<div className="items">

    {items.map(item=><CollectionItem key={item.id} item={item}></CollectionItem>)


    }
</div>

</div>


}

const mapStateToProps = (state,ownProps)=>({
 collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);