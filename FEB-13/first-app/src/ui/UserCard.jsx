import { useEffect } from "react";

function UserCard(props) {
  console.log(props);
  let name = props.user.name;

  if (name.length > 10) {
    name = name.substring(0, 10) + "...";
  }

  useEffect(() => {
    return () => {
      console.log("Componnet Is UnMounting", props.user.name);
    };
  }, []);

  const handleOnClick = () => {
    console.log("Clicked On", name);
    props.onShowMore();
  };
  return (
    <div
      className={`product-card ${
        props.user.id % 2 == 0 ? "bg-tomato" : "bg-dodgerblue"
      }`}
    >
      <img src={props.image} alt="" />
      <div>
        <h3 title={props.name}>{name}</h3>
        <div className="actions">
          <button onClick={handleOnClick}>Show More</button>
          <button onClick={props.onDelete}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
