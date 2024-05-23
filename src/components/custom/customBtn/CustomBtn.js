import React from 'react';

import s from './customBtn.module.scss';

const CustomBtn = ({ text, clickHandler }) => {
    return (
        <button className={s.buttons} onClick={clickHandler}>
            {text}
        </button>
    );
};

export default CustomBtn;
