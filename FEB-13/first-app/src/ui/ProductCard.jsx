function ProductCard(props) {
  let name = props.name;

  if (name.length > 10) {
    name = name.substring(0, 10) + "...";
  }
  return (
    <div
      className={`product-card ${
        props.id % 2 == 0 ? "bg-tomato" : "bg-dodgerblue"
      }`}
    >
      <img src={props.image} alt="" />
      <h3 title={props.name}>{name}</h3>
    </div>
  );
}

export default ProductCard;
