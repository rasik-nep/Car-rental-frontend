import Hero from "./components/Hero";

function App() {

  return (
    <div className="bg-black text-white" >
      <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true}></Hero>
    </div>
  );
}

export default App;