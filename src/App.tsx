import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {

  return (
    <div className="bg-black text-white" >
      <Hero title={"Explore with Ease"} subtitle={"Affordable, reliable vehicle rentals at your service."} image={'./neta-back.jpg'} full={true} />
      <Services title={"Are you searching for dependable and cost-effective car rental services in Kathmandu, Nepal?"} subtitle={"Look no further than Shan Vehicle Rental, situated in Shankhamul, where we offer a diverse selection of rental vehicles, including cars and motorcycles, to cater to your transportation requirements. Whether you're a local resident or a visitor exploring the scenic landscapes of Nepal, Shan Vehicle Rental is your preferred choice for convenient and trouble-free transportation solutions. Benefit from excellent customer service and a streamlined rental process when you choose Shan Vehicle Rental. We recognize the significance of having a dependable means of transportation, and our commitment is evident in providing top-quality vehicles and outstanding service to ensure a seamless and enjoyable experience for our clients. Whether it's a day trip or an extended stay, Shan Vehicle Rental has got you covered."} />

    </div>
  );
}

export default App;