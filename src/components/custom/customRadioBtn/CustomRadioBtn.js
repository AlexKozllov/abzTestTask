import React from 'react';

import s from './customRadioBtn.module.scss';

const CustomRadioBtn = ({ name, id, value, selected, inputHandler }) => {
    return (
        <label htmlFor={id} className={s.radioBtnWrapper}>
            <span className={`${s.radio} ${selected ? s.selected : ''}`}></span>
            <span className={s.radioBtnValue}>{value}</span>
            <input type="radio" name={name} id={id} value={value} hidden onChange={inputHandler} />
        </label>
    );
};

export default CustomRadioBtn;
