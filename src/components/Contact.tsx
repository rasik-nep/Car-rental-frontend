export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-text-700 py-10 h-[50vh] w-[85vw] mx-auto rounded-4xl mt-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-white text-center">Drive with Shan Today</h1>
      <h4 className="text-base lg:text-2xl text-white text-center py-5">
        Connect with us and enjoy <br/> the best car service in the country
      </h4>
      <button className="bg-white text-text-500 block px-10 py-2 rounded-md text-base font-bold hover:bg-primary/90 transition-colors mt-4">
        Contact Us
      </button>
    </div>
  );
}
