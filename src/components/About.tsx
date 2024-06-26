
type AboutProps = {
    aboutData: {
        image: any;
        title: string;
        description: string;
    };
}

export default function About({ aboutData }: AboutProps) {
    return (
        <section className="full-container bg-primary-10 text-black p-7" id="about">
            <div className="flex flex-col md:flex-row py-5 md:py-10 lg:py-20 md:px-5 lg:px-10">
                <div className="md:w-[50%] content-center py-5 md:p-7 lg:p-10">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl">{aboutData.title}</h2>
                    <p className="md:w-[70%] mt-5 md:mt-10">{aboutData.description}</p>
                </div>
                <div className="md:w-[50%]">
                    <img
                        src={`${aboutData.image.data.attributes.url}`}
                        alt="About image"
                        className="h-[60vh] md:mx-auto w-[30rem] object-cover"
                    /> 
                </div>
            </div>

        </section>
    )
}
