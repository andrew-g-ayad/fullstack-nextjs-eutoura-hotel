import ServiceItem from "./ServiceItem";
export default function ServiceList(props) {
  const { services } = props;
  return (
    <ul>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.description}
          image={"/images/logo-h.png"}
          imageDimensions={{
            width: 300,
            height: 300,
          }}
        />
      ))}
    </ul>
  );
}
