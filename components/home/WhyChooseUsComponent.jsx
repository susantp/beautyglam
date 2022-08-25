import React, {FC} from "react";


const WhyChooseUsComponent =
    ({heading, subHeading, content}) => {
        return (
            <div className={`bg-orange-100`}>
                <div className={`sectionDiv`}>
                    <div className={`py-4 mt-5 flex flex-col items-center gap-y-6`}>
                        <h2 className={`headerText text-4xl font-playFair`}>{heading}</h2>
                        <p className={`text-slate-500 italic`}>{subHeading}</p>
                    </div>
                    <div className={`px-40 sm:px-4 md:px-40 lg:px-40 text-justify`}>
                        <p className={`leading-loose text-center text-2xl font-thin`}>{content}</p>
                    </div>

                </div>
            </div>
        )
    }
export default WhyChooseUsComponent