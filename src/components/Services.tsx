import PhotosText from "./PhotosText";

type HeroProps = {
    title: string;
    subtitle?: string;
}

const Services = ({ title, subtitle }: HeroProps) => {
    return (
        <section className="bg-white">
            <div
                className="flex flex-col justify-center items-center w-full p-10"
            >
                <h1 className="text-4xl font-alfa-slab text-bold text-center text-black">{title}</h1>
                {/* {subtitle && <p className="text-xl mt-3 text-center m-2">{subtitle}</p>} */}
                <div className="flex flex-col md:flex-row gap-4 my-4">
                    <PhotosText title={"Hello"} subtitle={"Hello there i am testing. Hello there i am testing"} image={"./neta-back.jpg"} />
                    <PhotosText title={"Hello"} subtitle={"Hello there i am testing.Hello there i am testing"} image={"./neta-back.jpg"} />
                    <PhotosText title={"Hello"} subtitle={"Hello there i am testing.Hello there i am testing"} image={"./neta-back.jpg"} />
                </div>
            </div>
        </section>
    );
};

export default Services;
