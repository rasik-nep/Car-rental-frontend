interface AvailableCarsProps {
    availableCars: AvailableCar[];
}

interface AvailableCar {
    attributes: {
        name: string;
        photo: any;
    }
}

export default function AvailableCars({ availableCars }: AvailableCarsProps) {
    return (
        <section className="full-container">
            <h1 className="text-center text-5xl py-3">Available Vehicles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-[5rem] py-[2rem]">
                {availableCars.map((car, index) => (
                    <div key={index} className="flex flex-col items-center m-3">
                        <img
                            src={`http://localhost:1337${car.attributes.photo.data.attributes.url}`}
                            alt={car.attributes.name}
                            className="h-[20rem] w-[25rem] object-cover"
                        />

                        <div className="border-2 border-gray-500 p-2 mt-4 w-[75%] md:max-w-[20rem]">
                            <h2 className="text-2xl text-center">{car.attributes.name}</h2>
                        </div>

                    </div>
                ))}
            </div>
        </section>


    );
}
