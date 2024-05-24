import React from 'react';
import sprite from '../../sprites/sprite.svg';

import s from './successfullyRegistered.module.scss';

const SuccessfullyRegistered = () => {
    return (
        <section className={s.wrapper}>
            <h2>User successfully registered</h2>
            <svg className={s.logoImg}>
                <use href={sprite + '#success-image'} />
            </svg>
        </section>
    );
};

export default SuccessfullyRegistered;
