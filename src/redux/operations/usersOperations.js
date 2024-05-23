import { getUserList } from '../../services/abzAgencyApi.js';
import {
    // getTransactionsRequest,
    // getTransactionsSuccess,
    // getTransactionsdsError,
    getUserListActions
} from '../actions/usersActions.js';

const getApiUsers = (data) => async (dispatch) => {
    // console.log('🚀 ~ updateCart ~ data:', data);
    // dispatch(getTransactionsRequest());
    try {
        // const userList = await getUserListActions(data);

        const userList = await getUserList();
        dispatch(getUserListActions(userList));
        console.log('🚀 ~ getApiUsers ~ userList:', userList);
        // sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
        // dispatch(getTransactionsdsError(error));
    }
};

export { getApiUsers };
