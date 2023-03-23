function UserCard({ name, age }) {
  function handleClick() {
    alert("My Name is " + name);
  }
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>Age : {age}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default UserCard;
