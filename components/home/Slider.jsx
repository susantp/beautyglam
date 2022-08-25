import React from 'react';
import Image from "next/image";

const Slider = ({heading, subHeading, image}) => {
    return (
        <div className={`bg-neutral-800`}>
            <div className={`container mx-auto flex justify-between items-center`}>
                <div className={`flex flex-col gap-y-10 px-20 py-40`}>
                    <p className={`font-thin text-3xl uppercase text-white`}>{subHeading}</p>
                    <p className={`text-white text-orange-600 font-lobster text-8xl `}>{heading}</p>
                    <p className={`font-thin text-white text-2xl`}>Beauty service that leave you looking & feeling your best.</p>
                </div>
                <div>
                    <Image src={image} width={600} height={200} alt={heading}/>
                </div>
            </div>
        </div>
    );
}

export default Slider;