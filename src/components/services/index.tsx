import TextComponent from "./TextComponent";
import { ServicesDisplaySection } from "../../constants"

export default function Services() {
    return (
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
            <div className="relative container mx-auto px-4">
                <img className="hidden md:block absolute top-0 right-0 animate-spinStar z-10" src="casper-assets/services/blink-star.png" alt="" />
                <div className="absolute top-0 right-0 -mr-52 -mt-64 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 rounded-full filter blur-4xl"></div>
                <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-32">
                    <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6">Our Services</h2>
                    <p className="max-w-xl text-xl text-gray-500 tracking-tight">Welcome to Shan Vehicle Rental, your go-to destination for reliable and convenient car rental services. Our commitment is to provide you with seamless experiences and quality vehicles for all your travel needs.</p>
                </div>
                <div className="relative">
                    {ServicesDisplaySection.map((social) => (
                        <TextComponent index={social.index} firstSpan={social.firstSpan} secondSpan={social.secondSpan} descriptionShort={social.descriptionShort} descriptionLong={social.descriptionLong} imgLink={social.imgLink} key={social.index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
