import Individual_card from "./individual_card"

type Testimonial_props = {
    title: string,
    testimonials_arr: {
        img: string,
        name: string,
        job: string,
        review_desc: string,
        review_star: number
    }[]
}

export default function Testimonials({ title, testimonials_arr }: Testimonial_props) {
    return (
        <section>
            <div className="full-container mt-12 mx-auto md:px-6 py-10">
                <section className="mb-12 text-center">
                    <h2 className="mb-12 text-3xl font-bold">{title}</h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        {testimonials_arr.map((testimonial, i) => (
                            <Individual_card
                                img={testimonial.img}
                                name={testimonial.name}
                                job={testimonial.job}
                                review_desc={testimonial.review_desc}
                                review_star={testimonial.review_star}
                                key={i}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}