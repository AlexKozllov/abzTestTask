import React from 'react';
import sprite from '../../sprites/sprite.svg';

import s from './user.module.scss';

const User = ({ user }) => {
    return (
        <div className={s.wrapper}>
            <img src={user.photo} alt={user.name} className={s.photo} />
            <div className={s.userData}>
                {user.name}
                <div className={s.tooltiptext}>{user.name}</div>
            </div>
            <div className={`${s.userData} ${s.position}`}>
                {user.position}
                <div className={s.tooltiptext}>{user.position}</div>
            </div>
            <div className={s.userData}>
                {user.email}
                <div className={s.tooltiptext}>{user.email}</div>
            </div>
            <div className={s.userData}>
                {user.phone}
                <div className={s.tooltiptext}>{user.phone}</div>
            </div>
        </div>
    );
};

export default User;
