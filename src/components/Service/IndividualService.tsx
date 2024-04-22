type IndividualServiceProps = {
    title: string;
    description: string;
    image: any;
    caption: string
}

export default function IndividualService({ title, description, image, caption }: IndividualServiceProps) {
    console.log(title, description, image)
    return (
        <section className="md:h-[70vh] p-10 flex flex-col md:flex-row gap-5 justify-center items-center ">
            <div className="w-full md:w-1/2 text-center h-full md:text-left flex flex-col">
                <h3 className="text-6xl">{title}</h3>
                <p className="mt-2 md:mt-[17rem]">{description}</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 items-center">
                <img src={'neta.png'} alt={title} className="w-[30rem] object-cover" />
                <div className="border-2 p-5 md:w-[30rem] text-center">
                    <p>{caption}</p>
                </div>
            </div>
        </section>

    )
} 1
