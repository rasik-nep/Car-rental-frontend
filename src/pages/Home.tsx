import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import PhotoGallery from "../components/photo-gallery";
// import BookNow from "./components/BookNow";
import Price from "../components/price";
import Footer from "../components/layout/Footer";

export default function Home() {
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