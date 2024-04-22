interface FeaturesProps {
    features: Features[];
}

interface Features {
    attributes: {
        title: string;
        description: string;
        image: any;
    }
}

export default function Features({ features }: FeaturesProps) {
    return (
        <section className="full-container">
            <h1 className="text-center text-5xl py-3">Our Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-[5rem] py-[2rem]">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center m-3">
                        <img
                            src={`http://localhost:1337${feature.attributes.image.data[0].attributes.url}`}
                            alt={feature.attributes.title}
                            className="h-[15rem] w-[25rem] object-cover"
                        />

                        <div className="border-2 border-gray-500 p-2 mt-4 md:w-[25rem]">
                            <h2 className="text-2xl">{feature.attributes.title}</h2>
                            <p className="mt-1 md:mt-3">{feature.attributes.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
