type IndividualServiceProps = {
    title: string;
    description: string;
    image: any;
    caption: string
}

export default function IndividualService({ title, description, image, caption }: IndividualServiceProps) {
    return (
        <section className="md:h-[50vh] lg:h-[70vh] p-5 md:p-7 lg:p-10 flex flex-col md:flex-row gap-5 justify-center items-center ">
            <div className="w-full md:w-1/2 text-center h-full md:text-left flex flex-col">
                <h3 className="text-3xl md:text-6xl">{title}</h3>
                <p className="mt-2 md:mt-[5rem] lg:mt-[8rem]">{description}</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 items-center">
                <img src={`${image.data[0].attributes.url}`} alt={title} className="w-[30rem] object-cover" />
                <div className="border-2 border-primary-50 px-5 py-2 md:p-5 md:min-w-[20rem] lg:min-w-[30rem] text-center">
                    <p>{caption}</p>
                </div>
            </div>
        </section>

    )
} 1
