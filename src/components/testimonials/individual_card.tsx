import { ImQuotesLeft } from "react-icons/im";

type Individual_cardProps = {
    name: string,
    review_desc: string,
}

export default function Individual_card({ name, review_desc }: Individual_cardProps) {
    return (
        <div className="mb-0">
            <ImQuotesLeft className="text-xl" />
            <p className="py-2 md:py-6">{review_desc}</p>
            <h5 className="mt-2 md:mt-6 text-lg font-bold">--<br />{name}</h5>
        </div>
    )
}
