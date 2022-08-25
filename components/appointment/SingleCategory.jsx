import React from "react";

const SingleCategory = ({category}) => {
    return (
        <div className={`flex items-center gap-x-2`}>
            <input value={category.value} type={`checkbox`}/>
            <p>{category.label}</p>
        </div>
    )
}
export default SingleCategory