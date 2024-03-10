import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import PhotoGallery from "../components/photo-gallery";
// import BookNow from "./components/BookNow";
import Price from "../components/price";
import Footer from "../components/layout/Footer";

import { useState, useEffect } from "react";
// get from database

// text from const
import { PAGE_TEXT, TESTIMONIALS } from "../constants";

// using render-as-you-fetch
export default function Home() {
    // const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [heroTitle, setHeroTitle] = useState("");
    const [servicesDisplaySectionText, setServicesDisplaySectionText] = useState([]);

    useEffect(() => {
        fetchData();
        // console.log(data);
    }, []);

    async function fetchData() {
        const response = await fetch('http://localhost:1337/api/page-text');
        const data = await response.json();
        console.log(data.data.attributes);
        setIsLoading(false);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-black" >
            <Navbar />
            <Hero title={PAGE_TEXT.hero_title_text} subtitle={PAGE_TEXT.hero_subtitle_text} image={'./neta-back.jpg'} full={true} />
            <About title={PAGE_TEXT.about_title} text={PAGE_TEXT.about_text} />
            <PhotoGallery />
            <Services title={PAGE_TEXT.service_title} text={PAGE_TEXT.services_text} servicesDisplaySectionText={servicesDisplaySectionText} />
            {/* <BookNow /> */}
            <Price title={PAGE_TEXT.price_title} text={PAGE_TEXT.price_text} />
            <Testimonials title={PAGE_TEXT.testimonials_title} testimonials_arr={TESTIMONIALS} />
            <Footer />
        </div>
    )
}