import {createSelector} from 'reselect';



export const selectDirectory = state=>state.directory ;

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    (directory)=>directory.sections

);

