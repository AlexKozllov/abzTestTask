import { getUserList } from '../../services/abzAgencyApi.js';
import {
    // getTransactionsRequest,
    // getTransactionsSuccess,
    // getTransactionsdsError,
    getUserListActions
} from '../actions/usersActions.js';

const getApiUsers = (page, count) => async (dispatch) => {
    try {
        const userList = await getUserList(page, count);
        dispatch(getUserListActions(userList));
    } catch (error) {
        // dispatch(getTransactionsdsError(error));
    }
};

export { getApiUsers };
