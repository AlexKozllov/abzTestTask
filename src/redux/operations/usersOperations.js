import { getUserList, postRegistration } from '../../services/abzAgencyApi.js';
import {
    // getTransactionsRequest,
    // getTransactionsSuccess,
    // getTransactionsdsError,
    getUserListActions,
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    resetUserListActions
} from '../actions/usersActions.js';

const getApiUsers = (page, count) => async (dispatch) => {
    try {
        const userList = await getUserList(page, count);
        dispatch(getUserListActions(userList));
    } catch (error) {
        // dispatch(getTransactionsdsError(error));
    }
};

const registrationUsers = (registrationForm) => async (dispatch) => {
    // dispatch(registrationUserRequest());

    try {
        const newUser = await postRegistration(registrationForm);
        dispatch(registrationUserSuccess(newUser));
        const userList = await getUserList(1, 6);
        dispatch(resetUserListActions(userList));
    } catch (error) {
        dispatch(registrationUserError(error.response.data));
    }
};

export { getApiUsers, registrationUsers };
