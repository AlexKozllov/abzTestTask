import React from 'react';

import s from './customBtn.module.scss';

const CustomBtn = ({ text }) => {
    return <button className={s.buttons}>{text}</button>;
};

export default CustomBtn;
