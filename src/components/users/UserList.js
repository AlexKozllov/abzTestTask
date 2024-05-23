import React, { useEffect, useLayoutEffect, useState } from 'react';
import User from '../user/User.js';

import s from './userList.module.scss';
import { getUserList } from '../../services/abzAgencyApi.js';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserListActions } from '../../redux/actions/usersActions.js';
import { getApiUsers } from '../../redux/operations/usersOperations.js';
import CustomBtn from '../custom/customBtn/CustomBtn.js';

const UserList = () => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.users.userList);
    const pagination = useSelector((state) => state.users.pagination);

    let ignore = false;
    useLayoutEffect(() => {
        if (!ignore) {
            dispatch(getApiUsers());
            ignore = true;
        }
    }, []);

    const getMoreUsers = () => {
        if (pagination.page !== pagination.total_pages) {
            dispatch(getApiUsers(pagination.page + 1, pagination.count));
        }
    };

    return (
        <section className={s.wrapper}>
            <h2>Working with GET request</h2>
            <ul className={s.userList}>
                {userList.map((item) => {
                    return (
                        <li key={item.id}>
                            <User user={item} />
                        </li>
                    );
                })}
            </ul>
            {pagination.page !== pagination.total_pages && <CustomBtn text="Show more" clickHandler={getMoreUsers} />}
        </section>
    );
};

export default UserList;
