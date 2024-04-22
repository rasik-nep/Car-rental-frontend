import IndividualService from "./IndividualService"

type ServiceProps = {
  services: {
    id: number;
    attributes: {
      title: string;
      description: string;
      caption: string;
      image: any;
    };
  }[]
}

export default function index({ services }: ServiceProps) {
  console.log(services)
  return (
    <section className="md:py-10 md:px-20">
      {services.map((service, i) => (
        <IndividualService
          title={service.attributes.title}
          description={service.attributes.description}
          image={service.attributes.image}
          caption={service.attributes.caption}
          key={i}
        />
      ))}
    </section>
  )
}
