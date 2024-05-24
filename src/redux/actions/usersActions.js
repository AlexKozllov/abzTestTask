import { createAction } from '@reduxjs/toolkit';

const getUserListRequest = createAction('users/getUserListRequest');
const getUserListSuccess = createAction('users/getUserListSuccess');
const getUserListError = createAction('users/getUserListError');
const resetUserListActions = createAction('users/resetUserListActions');

const registrationUserRequest = createAction('users/registrationUserRequest');
const registrationUserSuccess = createAction('users/registrationUserSuccess');
const registrationUserError = createAction('users/registrationUserError');
const registrationUserResetError = createAction('users/registrationUserResetError');
const setRegistrationUserError = createAction('users/setRegistrationUserError');

export {
    getUserListRequest,
    getUserListSuccess,
    getUserListError,
    resetUserListActions,
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    registrationUserResetError,
    setRegistrationUserError
};
