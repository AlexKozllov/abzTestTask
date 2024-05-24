import React, { useState } from 'react';
import { forwardRef } from 'react';

import s from './customInputText.module.scss';

const CustomInputText = forwardRef(
    ({ name, value, placeholderValue, helpText, error, errorText, inputHandler, blureHandler }, forwardedRef) => {
        const [isInputClicked, setIsInputClicked] = useState(false);
        const miniPHHandler = () => {
            setIsInputClicked(!isInputClicked);
        };

        return (
            <label className={`${s.inputText} ${!!errorText ? s.error : ''}`} onFocus={miniPHHandler} onBlur={miniPHHandler}>
                {(isInputClicked || value) && <div className={s.miniPHHandler}>{placeholderValue}</div>}
                <input
                    type="text"
                    name={name}
                    value={value}
                    placeholder={!isInputClicked ? placeholderValue : ''}
                    onChange={inputHandler || (() => {})}
                    onBlur={blureHandler}
                    ref={forwardedRef}
                />
                {errorText ? <span className={s.errorText}>{errorText}</span> : <span className={s.helpText}>{helpText}</span>}
            </label>
        );
    }
);

export default CustomInputText;
