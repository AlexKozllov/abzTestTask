import React from 'react';
import Header from '../header/Header';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={s.wrapper}>
            <header>{<Header />}</header>

            <main className={s.container}> {children}</main>
            {/* <footer className={s.footerWrappwr}>{<Footer />}</footer> */}
        </div>
    );
};

export default Layout;
