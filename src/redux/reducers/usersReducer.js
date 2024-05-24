import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
    getUserListActions,
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    registrationUserResetError,
    setRegistrationUserError,
    resetUserListActions
} from '../actions/usersActions';
// import { isEmpty } from 'lodash';

const userList = createReducer([], (builder) => {
    builder.addCase(getUserListActions, (state, { payload }) => [...state, ...payload.users]);
    builder.addCase(resetUserListActions, (state, { payload }) => [...payload.users]);
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

const registratedUserErrors = createReducer({}, (builder) => {
    builder.addCase(registrationUserRequest, (state, { payload }) => ({}));
    builder.addCase(registrationUserSuccess, (state, { payload }) => ({ ...payload }));
    builder.addCase(registrationUserError, (state, { payload }) => {
        const fails = {};
        Object.keys(payload.fails).forEach((item) => {
            fails[item] = payload.fails[item][0];
        });

        return {
            ...state,
            fails: { ...state.fails, ...fails },
            error: !payload.massage
        };
    });
    builder.addCase(setRegistrationUserError, (state, { payload }) => ({
        ...state,
        fails: { ...state.fails, [payload.field]: payload.massage },
        error: !payload.massage
    }));
});

const usersReducer = combineReducers({
    userList,
    pagination,
    registratedUserErrors
});

export { usersReducer };
