import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import PhotoGallery from "../components/photo-gallery";
// import BookNow from "./components/BookNow";
import Price from "../components/price";
import Footer from "../components/layout/Footer";

type TextDataType = {
    hero_title: string;
    hero_subtitle?: string;
    about: string;
    about_desc?: string;
    service: string;
    services_desc?: string;
    price: string;
    price_desc?: string;
    testimonials: string;
}
type ContactDetailsType = {
    facebook?: string;
    Instagram?: string;
    whatsapp?: string;
    email: string;
    location: string;
    phone: string;
}

type HeroDataType = {
    image: string;
    welcome: string;
    company_name: string;
    company_slogan: string;
}
type AboutDataType = {
    image: string;
    title: string;
    description: string;
}

// using render-as-you-fetch
export default function Home() {
    const [textData, setTextData] = useState<TextDataType>({
        hero_title: "",
        hero_subtitle: "",
        about: "",
        about_desc: "",
        service: "",
        services_desc: "",
        price: "",
        price_desc: "",
        testimonials: ""
    });
    const [contactDetails, setContactDetails] = useState<ContactDetailsType>({
        facebook: "",
        Instagram: "",
        whatsapp: "",
        email: "",
        location: "",
        phone: ""
    })

    const [heroData, setHeroData] = useState<HeroDataType>({
        image: "",
        welcome: "",
        company_name: "",
        company_slogan: ""
    })
    const [aboutData, setAboutData] = useState<AboutDataType>({
        image: "",
        title: "",
        description: "",
    })

    const [testimonials, setTestimonials] = useState([]);
    const [servicesDisplaySectionText, setServicesDisplaySectionText] = useState([]);
    const [prices, setPrices] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        axios.all([
            axios.get('http://localhost:1337/api/page-text'),
            axios.get('http://localhost:1337/api/prices'),
            axios.get('http://localhost:1337/api/testimonials?populate=*'),
            axios.get('http://localhost:1337/api/service-sections'),
            axios.get('http://localhost:1337/api/contact-detail'),
            axios.get('http://localhost:1337/api/hero?populate=*'),
            axios.get('http://localhost:1337/api/about?populate=*'),
        ])
            .then(axios.spread((textData, prices, testimonials, serviceSections, contact_details, hero, about) => {
                setTextData(textData.data.data.attributes);
                setPrices(prices.data.data);
                setTestimonials(testimonials.data.data);
                setServicesDisplaySectionText(serviceSections.data.data);
                setContactDetails(contact_details.data.data.attributes);
                setHeroData(hero.data.data.attributes)
                setAboutData(about.data.data.attributes)
                setIsLoading(false)
            }))
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-black" >
            <Navbar />
            <Hero heroData={heroData} full={true} />
            <About aboutData={aboutData} />
            {/* <PhotoGallery /> */}
            <Services title={textData.service} text={textData.services_desc} servicesDisplaySectionText={servicesDisplaySectionText} />
            {/* <BookNow /> */}
            <Price title={textData.price} text={textData.price_desc} prices={prices} />
            <Testimonials title={textData.testimonials} testimonials_arr={testimonials} />
            <Footer contactDetails={contactDetails} />
        </div>
    )
}