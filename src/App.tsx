import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/testimonials";
import Services from "./components/services";
import BookNow from "./components/BookNow";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="text-black" >
      <Navbar />
      <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true} />
      <About />
      <Services />
      <BookNow />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;