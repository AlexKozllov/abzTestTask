import { getUserList, postRegistration } from '../../services/abzAgencyApi.js';
import {
    registrationUserRequest,
    registrationUserSuccess,
    registrationUserError,
    resetUserListActions,
    getUserListSuccess,
    getUserListRequest,
    getUserListError
} from '../actions/usersActions.js';

const getApiUsers = (page, count) => async (dispatch) => {
    dispatch(getUserListRequest());

    try {
        const userList = await getUserList(page, count);
        dispatch(getUserListSuccess(userList));
    } catch (error) {
        dispatch(getUserListError(error));
    }
};

const registrationUsers = (registrationForm) => async (dispatch) => {
    dispatch(registrationUserRequest());

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
