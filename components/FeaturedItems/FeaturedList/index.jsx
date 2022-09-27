import FeaturedItem from "./FeaturedItem";
export default function FeaturedList(props) {
  const { featuredItems } = props;
  return (
    <ul>
      {featuredItems.map((item) => (
        <FeaturedItem
          key={item.id}
          title={item.title}
          description={item.description}
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
