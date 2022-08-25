import React, {FC,ReactElement} from 'react';
import Image from "next/image";
import Link from "next/link";


const WhatWeDoComponent = ({heading,subHeading, items}) => {

    const SingleWhatWeDoComponent = ({title, slug, description, icon, image})=>
        <div className={`flex flex-col gap-y-3 items-center p-10`}>
            <div>
                {typeof icon === "object" ? icon : <Image src={image} width={150} height={150} alt={slug}/>}
            </div>
            <div>
                <p className={`text-4xl sm:text-xl font-medium text-center text-slate-600`}>{title}</p>
            </div>
            <div >
                <p className={`text-sm text-center text-slate-400`}>{description}</p>
            </div>
        </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv`}>
                <div className={`py-4 flex flex-col items-center gap-y-4`}>
                    <h2 className={`headerText text-4xl font-playFair`}>{heading}</h2>
                    <p className={`text-slate-500 italic`}>{subHeading}</p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-4  gap-y-2 pt-5 `}>
                    {items.map((item) =>
                        <SingleWhatWeDoComponent
                            title={item.title}
                            icon={item.icon}
                            image={item.image}
                            slug={item.slug}
                            description={item.description}
                            key={item.slug}/>
                    )}
                </div>
                <div className={`flex justify-evenly space-x-10 invisible md:visible`}>
                    <div className={`text-2xl flex p-4 bg-orange-600 rounded-lg text-white items-center cursor-pointer select-none`}>
                        <p className={`uppercase`}>
                            <Link href={`/appointment`}>
                                Book an Appointment
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDoComponent;