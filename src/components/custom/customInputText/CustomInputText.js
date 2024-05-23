import React, { useState } from 'react';

import s from './customInputText.module.scss';

const CustomInputText = ({ name, value, placeholderValue, helpText, error, errorText, inputHandler }) => {
    const [isInputClicked, setIsInputClicked] = useState(false);
    const miniPHHandler = () => {
        setIsInputClicked(!isInputClicked);
    };

    return (
        <label className={`${s.inputText} ${error ? s.error : ''}`} onFocus={miniPHHandler} onBlur={miniPHHandler}>
            {(isInputClicked || value) && <div className={s.miniPHHandler}>{placeholderValue}</div>}
            <input type="text" name={name} value={value} placeholder={!isInputClicked ? placeholderValue : ''} onChange={inputHandler} />
            {error && errorText ? <span className={s.errorText}>{errorText}</span> : <span className={s.helpText}>{helpText}</span>}
        </label>
    );
};

export default CustomInputText;
