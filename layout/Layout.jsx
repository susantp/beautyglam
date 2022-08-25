import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoTop from "./GoTop";

function Layout({children}) {
    return (
        <div className={`bg-slate-100 `}>
            <Navbar></Navbar>
            {children}
            <GoTop></GoTop>
            <Footer></Footer>
        </div>
    );
}

export default Layout;