import TableComponent from './TableComponent';

export default function Price() {
    return (
        <section className="relative py-6 md:py-6 bg-body overflow-hidden max-w-[1080px]">
            <div className="relative container mx-auto px-4">
                <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-6">
                    <h2 className="w-[22rem] font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 border-b-2 border-opacity-100 border-red-400">Our Prices</h2>
                    <p className="max-w-xl text-xl text-gray-500 tracking-tight">At Shan Vehicle Rental, we take pride in offering our clients competitive prices, ensuring that they receive exceptional value for their beauty services.</p>
                    {/* <p className="text-sm text-red-400">*Per day price</p> */}
                </div>
                <TableComponent />
            </div>
        </section>
    )
}
