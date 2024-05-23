import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getUserListActions } from '../actions/usersActions';
// import { isEmpty } from 'lodash';

const userList = createReducer([], (builder) => {
    builder.addCase(getUserListActions, (state, { payload }) => [...payload.users]);
    // builder.addCase(calculateCart, (state, { payload }) => [...payload.products]);
    // builder.addCase(setQuantityCart, (state, { payload }) => {
    //     return state.map((item) => {
    //         if (item.productId === payload.productId) {
    //             return { ...item, quantity: payload.newQuantity };
    //         }
    //         return item;
    //     });
    // });
});

const nextPage = createReducer('', (builder) => {
    builder.addCase(getUserListActions, (state, { payload }) => payload.links.next_url);
});

const usersReducer = combineReducers({
    userList,
    nextPage
});

export { usersReducer };
