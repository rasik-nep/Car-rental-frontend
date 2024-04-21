import Button from "./Button";
// import { FaAngleDoubleDown } from "react-icons/fa";

type HeroProps = {
    heroData: {
        image: any;
        welcome: string;
        company_name: string;
        company_slogan: string;
    };
    full: boolean;
}

const Hero = ({ heroData, full }: HeroProps) => {
    // const scrollToNextSection = () => {
    //     const nextSection = document.getElementById("about");

    //     if (nextSection) {
    //         window.scrollTo({
    //             top: nextSection.offsetTop,
    //             behavior: 'smooth',
    //         });
    //     }
    // };
    return (
        <section className="hero bg-black text-white">
            <img
                src={`http://localhost:1337${heroData.image.data.attributes.formats.large.url}`}
                alt="Hero image"
                className={`w-full ${full ? 'h-[100vh]' : 'h-[70vh]'}  object-cover opacity-40`}
            />
            <div
                className="h-[100vh] top-[30px] absolute flex flex-col justify-center items-center w-full gap-10"
            >
                <h1 className="text-2xl text-bold text-center">WELCOME TO</h1>
                <p className="text-7xl md:text-9xl mt-3 text-center m-2">Shan Vehicle Rental </p>
                <h1 className="text-3xl text-bold text-center">Vehicle Rental Service</h1>
                <a href="https://wa.me/9869292648?text=Reserve a car" target="_blank">
                    <Button type="button" title="Learn More" variant="btn_white_square" />
                </a>
            </div>
            {/* Button placed at the bottom */}
            {/* <div className="absolute bottom-4 right-4 mt-[00px] w-full">
                {full && <FaAngleDoubleDown
                    className="text-white cursor-pointer text-2xl mx-auto animate-bounce"
                    onClick={scrollToNextSection}
                />}
            </div> */}
        </section>
    );
};

export default Hero;
