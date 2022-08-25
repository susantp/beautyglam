import React from "react";
import Layout from "../layout/Layout";
import Slider from "../components/home/Slider";
import useContentSchema from "../hooks/useContentSchema";
import WhyChooseUs from "../components/home/WhyChooseUsComponent";
import WhatWeDoComponent from "../components/home/WhatWeDoComponent";
import IndexHeadComponent from "../components/home/IndexHeadComponent";
import ContactUsComponent from "../components/home/ContactUsComponent";


const Home = () => {
    const { whyChooseUs, whatWeDo} = useContentSchema();
    return (
        <Layout>
            <div>
                <IndexHeadComponent page={`home`}/>
                <Slider subHeading={`Advanced Beauty Treatments`} heading={`Invest in yourself`} image={`/sliderImg.png`}/>

                <WhyChooseUs subHeading={whyChooseUs.subHeading} heading={whyChooseUs.heading} content={whyChooseUs.content}/>
                <WhatWeDoComponent subHeading={whatWeDo.subHeading} heading={whatWeDo.heading} items={whatWeDo.items}/>
                <ContactUsComponent heading={`Contact US`}/>
            </div>
        </Layout>
    )
}

export default Home