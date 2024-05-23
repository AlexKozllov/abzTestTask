import React from 'react';
import CustomBtn from '../custom/customBtn/CustomBtn.js';

import s from './banner.module.scss';

const Banner = () => {
    return (
        <section className={s.wrapper}>
            <h2>Test assignment for front-end developer</h2>
            <p>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving.
            </p>
            <span className={s.position}>
                <CustomBtn text="Sign up"></CustomBtn>
            </span>
        </section>
    );
};

export default Banner;
