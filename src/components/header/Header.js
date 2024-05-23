import React from 'react';
import s from './header.module.scss';

import sprite from '../../sprites/sprite.svg';
import CustomBtn from '../custom/customBtn/CustomBtn.js';

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <h1>
                <a href="#">
                    <svg className={s.logoImg}>
                        <use href={sprite + '#Logo'} />
                    </svg>
                </a>
            </h1>
            <div className={s.buttonContainer}>
                <CustomBtn text="Users"></CustomBtn>
                <CustomBtn text="Sign up"></CustomBtn>
            </div>
        </div>
    );
};

export default Header;
