import React, {useRef} from 'react';
import Layout from "../layout/Layout";
import useContentSchema from "../hooks/useContentSchema";
import SingleCategory from "../components/appointment/SingleCategory";
import Head from "next/head";
import IndexHeadComponent from "../components/home/IndexHeadComponent";
import CalendarComponent from "../components/appointment/CalendarComponent";

function Appointment(props) {
    const formRef = useRef(null)
    const {categories} = useContentSchema();
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formRef.current.value)
    }

    return (
        <Layout>
            <IndexHeadComponent page={`appointment`}/>

            <div className={`container mx-auto sectionDiv`}>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={formRef} onSubmit={handleSubmit}>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        <div className={`mb-6 flex flex-col gap-y-2`}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                                Firstname
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstname" type="text" placeholder="Firstname"
                            />
                        </div>
                        <div className={`mb-6 flex flex-col gap-y-2`}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                                Lastname
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastname" type="text" placeholder="Lastname"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        <div className={`mb-6 flex flex-col gap-y-2`}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="Email"
                            />
                        </div>
                        <div className={`mb-6 flex flex-col gap-y-2`}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="number" placeholder="### ### ####"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">


                        <div>
                            <div className={`mb-6 flex flex-col gap-y-2`}>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Appointment&rsquo;s Time
                                </label>
                                <CalendarComponent />

                                <input
                                    className="shadow appearance-none border rounded w-[22rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="appointment-time" type="time"
                                />
                            </div>
                        </div>

                        <div className={`mb-6 flex flex-col gap-y-2`}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Choose Category
                            </label>
                            {
                                categories.map((category) =>
                                    <SingleCategory category={category} key={category.slug}/>
                                )
                            }

                        </div>
                    </div>


                    <div className="flex items-center justify-end">
                        <input
                            className="bg-orange-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value={`Make an Appointment`}
                        />
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Appointment;