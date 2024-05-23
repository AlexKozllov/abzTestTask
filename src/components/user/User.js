import React from 'react';
import sprite from '../../sprites/sprite.svg';

import s from './user.module.scss';

const User = ({ user }) => {
    return (
        <div className={s.wrapper}>
            <img src={user.photo} alt={user.name} className={s.photo} />
            <div className={s.userData}>{user.name}</div>
            <div className={`${s.userData} ${s.position}`}>{user.position}</div>
            <div className={s.userData}>{user.email}</div>
            <div className={s.userData}>{user.phone}</div>
        </div>
    );
};

export default User;
