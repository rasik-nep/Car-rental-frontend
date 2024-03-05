type Individual_cardProps = {
    img: string,
    name: string,
    job: string,
    review_desc: string,
    review_star: number
}

export default function Individual_card({ img, name, job, review_desc, review_star }: Individual_cardProps) {
    return (
        <div className="mb-0">
            <div className="mb-6 flex justify-center">
                <img src={img}
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
            </div>
            <h5 className="mb-2 text-lg font-bold">{name}</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                {job}
            </h6>
            <p className="mb-4">
                {review_desc}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                    <path fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
            </p>
            <ul className="mb-0 flex justify-center">
                {Array.from({ length: review_star }).map((_, i) => (
                    <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                    </li>
                ))}
            </ul>
        </div>
    )
}
