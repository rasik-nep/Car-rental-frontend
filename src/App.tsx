import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Services from "./components/services";

function App() {

  return (
    <div className="bg-black text-white" >
      <Navbar />
      <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true} />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;