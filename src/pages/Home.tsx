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
import app from "../config/firebase-info"
import { getDatabase, ref, get } from "firebase/database"

// using render-as-you-fetch
export default function Home() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [heroTitle, setHeroTitle] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const db = getDatabase(app);
        const dbRef = ref(db, 'data');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data: { testText1: string, testText2: string }[] = Object.values(snapshot.val());
            console.log(data);
            setData(data);
            const firstItem = data[0]; // Assuming you want to set heroTitle based on the first item in the array
            if (firstItem) {
                setHeroTitle(firstItem.testText1);
            }
            setIsLoading(false);
        } else {
            console.log("No data available");
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="text-black" >
            <Navbar />
            <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true} />
            <About />
            <PhotoGallery />
            <Services />
            {/* <BookNow /> */}
            <Price />
            <Testimonials />
            <Footer />
        </div>
    )
}