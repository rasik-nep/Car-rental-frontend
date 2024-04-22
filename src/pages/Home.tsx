import { useState, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AvailableCars from "../components/AvailableCars";
import Testimonials from "../components/testimonials";
import Footer from "../components/layout/Footer";
import Features from "../components/Features";
import Service from "../components/Service";

// import api responses
import { HeroApiResponse, AboutApiResponse, AvailableCarsApiResponse, FeaturesApiResponse, TestimonialsApiResponse, SocialMediaApiResponse, ServiceApiResponse } from "../constants/ApiResponse";

type ContactDetailsType = {
    facebook?: string;
    Instagram?: string;
    whatsapp?: string;
    email: string;
    location: string;
    phone: string;
}

type HeroDataType = {
    image: any;
    welcome: string;
    company_name: string;
    company_slogan: string;
}
type AboutDataType = {
    image: any;
    title: string;
    description: string;
}
type AvailableCar = {
    name: string;
    photo: any;
};

type AvailableCarsState = {
    attributes: AvailableCar;
}[];

type Features = {
    title: string;
    description: string;
    image: any;
};

type FeaturesState = {
    attributes: Features;
}[];

interface Testimonial {
    id: number;
    attributes: {
        name: string;
        review_desc: string;
    };
}

interface Services {
    id: number;
    attributes: {
        title: string;
        description: string;
        caption: string;
        image: any;
    };
}

// using render-as-you-fetch
export default function Home() {
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
    const [availableCars, setAvailableCars] = useState<AvailableCarsState>([{
        attributes: {
            name: "",
            photo: ""
        }
    }]);
    const [features, setFeatures] = useState<FeaturesState>([{
        attributes: {
            title: "",
            description: "",
            image: ""
        }
    }]);

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [serviceDetails, setServiceDetails] = useState<Services[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // set the api data
        setHeroData(HeroApiResponse.data.attributes);
        setAboutData(AboutApiResponse.data.attributes);
        setAvailableCars(AvailableCarsApiResponse.data);
        setFeatures(FeaturesApiResponse.data);
        setTestimonials(TestimonialsApiResponse.data);
        setContactDetails(SocialMediaApiResponse.data.attributes);
        setServiceDetails(ServiceApiResponse.data);
        setIsLoading(false);
    }, []);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-black" >
            <Navbar />
            <Hero heroData={heroData} full={true} />
            <About aboutData={aboutData} />
            <AvailableCars availableCars={availableCars} />
            <Service services={serviceDetails} />
            <Features features={features} />
            <Testimonials testimonials_arr={testimonials} />
            <Footer contactDetails={contactDetails} />
        </div>
    )
}