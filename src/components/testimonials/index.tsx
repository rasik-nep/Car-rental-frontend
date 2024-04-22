import Individual_card from "./individual_card"

type Testimonial_props = {
    testimonials_arr: {
        id: number;
        attributes: {
            name: string,
            review_desc: string,
        }
    }[]
}

export default function Testimonials({ testimonials_arr }: Testimonial_props) {
    return (
        <section className="relative text-white bg-primary-10">
            <div
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                // style={{ backgroundImage: `url('./neta-back.jpg')` }}
                // style={{ backgroundColor: '#100500'}}
            />
            <div className="relative md:h-[60vh] lg:h-[80vh]">
                <h2 className="text-center py-10 md:py-15 lg:py-20 text-3xl md:text-5xl lg:text-7xl font-bold">What our Customers say</h2>
                <div className="grid gap-x-6 p-5 md:p-10 mt-5 md:mt-5 lg:mt-20 md:grid-cols-3 lg:gap-x-12">
                    {testimonials_arr.map((testimonial, i) => (
                        <Individual_card
                            name={testimonial.attributes.name}
                            review_desc={testimonial.attributes.review_desc}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}