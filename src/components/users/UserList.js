import React, { useEffect, useState } from 'react';
import User from '../user/User.js';

import s from './userList.module.scss';
import { getUserList } from '../../services/abzAgencyApi.js';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserListActions } from '../../redux/actions/usersActions.js';
import { getApiUsers } from '../../redux/operations/usersOperations.js';
import CustomBtn from '../custom/customBtn/CustomBtn.js';

const UserList = () => {
    // const [userList, setUserList] = useState({});
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.users.userList);

    useEffect(() => {
        dispatch(getApiUsers());
    }, []);

    return (
        <section className={s.wrapper}>
            <h2>Working with GET request</h2>
            <ul className={s.userList}>
                {userList.map((item, index) => {
                    if (index < 6) {
                        return (
                            <li key={item.id}>
                                <User user={item} />
                            </li>
                        );
                    }
                })}
            </ul>
            <CustomBtn text="Show more" />
        </section>
    );
};

export default UserList;
