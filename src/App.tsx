import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/testimonials";
import Services from "./components/services";
import PhotoGallery from "./components/photo-gallery";
// import BookNow from "./components/BookNow";
import Price from "./components/price";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <div className="text-black" >
      <Navbar />
      <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true} />
      <About />
      <Services />
      <PhotoGallery />
      {/* <BookNow /> */}
      <Price />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;