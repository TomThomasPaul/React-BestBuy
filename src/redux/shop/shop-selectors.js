import {createSelector} from 'reselect';
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {

hats : 1,
sneakers : 2,
jackets : 3,
womens :4,
mens :5


}

export const selectShop =(state)=>state.shop;

export const selectShopCollections =createSelector(
    [selectShop],
    (shop)=>shop.collections
);

export const selectCollectionsForPreview =createSelector(
    [selectShopCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
);

export const selectCollection = memoize(collectionId=> createSelector( //memoize is used in this selector because this one has an input  'collection id' ..so the next time the same input is received the func is not called and the results are obtained from the cache
    [selectShopCollections],
    //collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionId])
    collections=>collections[collectionId]
));