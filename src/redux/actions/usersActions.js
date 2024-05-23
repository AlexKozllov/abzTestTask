import { createAction } from '@reduxjs/toolkit';

const getUserListActions = createAction('users/getUsers');
const resetUserListActions = createAction('users/resetUserListActions');

const registrationUserRequest = createAction('users/registrationUserRequest');
const registrationUserSuccess = createAction('users/registrationUserSuccess');
const registrationUserError = createAction('users/registrationUserError');
const registrationUserResetError = createAction('users/registrationUserResetError');
const setRegistrationUserError = createAction('users/setRegistrationUserError');

export {
    getUserListActions,
    resetUserListActions,
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    registrationUserResetError,
    setRegistrationUserError
};
