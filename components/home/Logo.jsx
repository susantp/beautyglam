import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Logo({title, imagePath}) {
    return (
        <div className={`flex-col flex cursor-pointer select-none`}>
            <Link href={`/`}>
                <p className={`font-thin font-lobster text-3xl`}>Beauty Glam by Sushi</p>
            </Link>
            {/*<p className={`font-thin `}>invest in yourself</p>*/}
        </div>
    );
}

export default Logo;