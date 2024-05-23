import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getUserListActions } from '../actions/usersActions';
// import { isEmpty } from 'lodash';

const userList = createReducer([], (builder) => {
    builder.addCase(getUserListActions, (state, { payload }) => [...state, ...payload.users]);
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

const pagination = createReducer('', (builder) => {
    builder.addCase(getUserListActions, (state, { payload }) => ({
        page: payload.page,
        total_pages: payload.total_pages,
        count: payload.count
    }));
});

const usersReducer = combineReducers({
    userList,
    pagination
});

export { usersReducer };
