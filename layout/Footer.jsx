import React from 'react';

const Footer = (props)  => {
    const year = new Date()
    return (
        <footer className={`bg-orange-600 text-white items-center py-3 bottom-0 sticky`}>
            <div className={`container mx-auto flex justify-end`}>
                {/*<div>Privacy Policy | Disclaimer | Site Map</div>*/}
                <div> &copy; {year.getFullYear()} All Right Reserved Tech Bizz Pvt.Ltd.</div>
            </div>
        </footer>
    );
}

export default Footer;