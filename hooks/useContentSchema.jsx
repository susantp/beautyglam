import React, {useState} from 'react';
import {SiOctopusdeploy, SiGoogleoptimize, SiAndroidstudio, SiMaterialdesignicons} from "react-icons/si";
import {BiAnalyse, BiCartAlt} from "react-icons/bi";
import {CgPerformance, CgWebsite} from "react-icons/cg";
import {DiResponsive} from "react-icons/di"
import {MdDesignServices, MdOutlineDeveloperMode, MdOutlinePhoneInTalk, MdEmail} from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io"

export default function UseContentSchema() {
    const [iconClasses, setIconClasses] = useState('text-8xl text-orange-500');
    const [headerInfo, setHeaderInfo] = useState({
        phone: {content: '+977-9851040576', icon: <IoLogoWhatsapp className={`text-4xl text-orange-500`}/>},
        email: {content: 'techbizznepal@gmail.com', icon: <MdEmail className={`text-4xl text-orange-500`}/>}
    });
    const [logo, setLogo] = useState({title: 'Tech Bizz', imagePath: '/logo.png'});
    const [navigationItems, setNavigationItems] = useState([
        {
            title: 'Work Process',
            slug: 'work-process'
        },
        {
            title: 'Why Choose Us',
            slug: 'why-choose-us'
        },
        {
            title: 'What We Do',
            slug: 'what-we-do'
        },
        {
            title: 'Contact',
            slug: 'contact'
        }
    ]);
    const [workProcessComponent, setWorkProcessComponent] = useState({
        heading: 'our work process',
        processes: [
            {
                slug: 'analysis',
                title: 'Analysis',
                image: 'https://via.placeholder.com/150.png',
                icon: <BiAnalyse className={iconClasses}></BiAnalyse>
            },
            {
                slug: 'designing',
                title: 'Designing',
                image: 'https://via.placeholder.com/150.png',
                icon: <MdDesignServices className={iconClasses}/>
            },
            {
                slug: 'development',
                title: 'Development',
                image: 'https://via.placeholder.com/150.png',
                icon: <MdOutlineDeveloperMode className={iconClasses}></MdOutlineDeveloperMode>
            },
            {
                slug: 'testing',
                title: 'Testing',
                image: 'https://via.placeholder.com/150.png',
                icon: <CgPerformance className={iconClasses}></CgPerformance>
            },
            {
                slug: 'launch',
                title: 'Launch',
                image: 'https://via.placeholder.com/150.png',
                icon: <SiOctopusdeploy className={iconClasses}></SiOctopusdeploy>
            }
        ]
    });
    const [whyChooseUs, setWhyChooseUs] = useState({
        heading: 'Beauty Glam by Sushi',
        subHeading: 'your one-time beauty stop',
        content: 'Whether you would like to spruce up your nails with an OPI nail trim, pay consideration of your skin with a Clarena facial or get liberated of hair with waxing or the more enduring IPL, you will be able do it here.'
    });
    const [whatWeDo, setWhatWeDo] = useState({
        heading: "where our values matter",
        subHeading: "in everything we love to do",
        items: [
            {
                icon: <CgWebsite className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Beauty',
                slug: 'beauty',
                description: 'Because you’re worth it…',
            }, {
                icon: <BiCartAlt className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Nails & Spa',
                slug: 'nails-spa',
                description: 'Where nail meets art…'
            },
            {
                icon: <SiAndroidstudio className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Hifiu',
                slug: 'hifiu',
                description: 'Time to treat yourself…'
            },
            {
                icon: <SiMaterialdesignicons className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Fat Freezing',
                slug: 'fat-freezing',
                description: 'Beauty shortcuts…'
            },
        ]
    });
    const [clients, setClients] = useState([{}, {}, {}, {}, {}, {}, {}, {},]);
    const [categories, setCategories] = useState([
        {label: 'Color', value: 'color'},
        {label: 'Color and Haircut', value: 'color-haircut'},
        {label: 'Hair Treatments', value: 'hair-treatment'},
        {label: 'Haircuts', value: 'haircuts'},
        {label: 'Styling', value: 'styling'},
        {label: 'Waxing', value: 'waxing'}
    ])

    return {
        navigationItems,
        logo,
        workProcessComponent,
        whyChooseUs,
        whatWeDo,
        clients,
        headerInfo,
        categories
    };
}


