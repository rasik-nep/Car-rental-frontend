import Hero from "./components/Hero";

function App() {

  return (
    <div className="bg-black-70" >
      <Hero title={"Because it must be flawless"} subtitle={"EMBRACE YOUR UNIQUE STYLE"} image={'./neta-back.jpg'} full={true}></Hero>
    </div>
  );
}

export default App;