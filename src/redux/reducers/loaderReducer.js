import { createReducer } from '@reduxjs/toolkit';
import {
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    getUserListSuccess,
    getUserListRequest,
    getUserListError
} from '../actions/usersActions';

const loading = createReducer(false, (builder) => {
    builder.addCase(getUserListRequest, (state, { payload }) => true);
    builder.addCase(getUserListSuccess, (state, { payload }) => false);
    builder.addCase(getUserListError, (state, { payload }) => false);

    builder.addCase(registrationUserRequest, (state, { payload }) => true);
    builder.addCase(registrationUserSuccess, (state, { payload }) => false);
    builder.addCase(registrationUserError, (state, { payload }) => false);
});

export { loading };
