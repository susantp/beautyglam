import React from "react";
import Link from "next/link";

const HeaderInfo = ({email, phone}) => {
    const handleOnclick = (e) => {

    }
    return (
        <div className={`flex justify-evenly space-x-10 invisible md:visible`}>
            <div className={`text-xl flex p-4 bg-orange-600 rounded-lg text-white items-center cursor-pointer select-none`}>
                <p className={`uppercase`}>
                <Link href={`/appointment`}>
                        Book an Appointment
                </Link>
                </p>
            </div>
        </div>
    )
}
export default HeaderInfo