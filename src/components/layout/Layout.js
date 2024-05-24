import React from 'react';
import Header from '../header/Header';

import s from './Layout.module.scss';
import Loader from '../loader/Loader.js';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const loading = useSelector((state) => state.loading);
    return (
        <div className={s.wrapper}>
            {loading && <Loader loading={loading} />}

            <header>{<Header />}</header>

            <main className={s.container}> {children}</main>
            {/* <footer className={s.footerWrappwr}>{<Footer />}</footer> */}
        </div>
    );
};

export default Layout;
