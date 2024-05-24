import React from 'react';
import { RingSpinner } from 'react-spinner-overlay';

import s from './loader.module.scss';

const Loader = ({ loading }) => {
    return <div className={s.wrapper}>{<RingSpinner loading={loading} color="#00BDD3" borderWidth={3} />}</div>;
};

export default Loader;
