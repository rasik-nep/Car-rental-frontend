export default function About({ title, text }: { title: string, text?: string }) {
    return (
        <section className="full-container bg-white text-black p-7" id="about">
            <div className="">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium font-alfa-slab text-bold text-center border-b-2 border-opacity-100 border-red-400 md:w-[20rem] mx-auto">{title}</h1>
                <div className="max-w-[40rem] mx-auto text-center p-4">
                    <p className="text-md">
                        {text}
                    </p>
                </div>
            </div>

        </section>
    )
}
