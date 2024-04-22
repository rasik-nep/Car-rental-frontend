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
    return (
        <section className="hero bg-primary-50 text-white">
            <img
                src={`${heroData.image.data.attributes.url}`}
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
        </section>
    );
};

export default Hero;
