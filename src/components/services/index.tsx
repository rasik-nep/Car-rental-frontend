import TextComponent from "./TextComponent";

type ServicesAttributes = {
    first_span: string,
    second_span: string,
    description_short: string,
    description_long: string
}

type ServicesDisplaySectionTextProps = {
    id: number,
    attributes: ServicesAttributes
}

type ServicesProps = {
    title: string,
    text?: string,
    servicesDisplaySectionText: ServicesDisplaySectionTextProps[]
}

export default function Services({ title, text, servicesDisplaySectionText }: ServicesProps) {
    return (
        <section className="relative py-6 md:py-6 bg-body overflow-hidden">
            <div className="relative container mx-auto px-4">
                <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-12">
                    <h2 className="md:w-[22rem] lg:w-[26rem] font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 border-b-2 border-opacity-100 border-red-400">{title}</h2>
                    <p className="max-w-xl text-xl text-gray-500 tracking-tight">{text}</p>
                </div>
                <div className="relative">
                    {servicesDisplaySectionText.map((social) => (
                        <TextComponent index={social.id} firstSpan={social.attributes.first_span} secondSpan={social.attributes.second_span} description_short={social.attributes.description_short} description_long={social.attributes.description_long} key={social.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
