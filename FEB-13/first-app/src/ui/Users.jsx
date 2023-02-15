import React from "react";
import UserCard from "./UserCard";

export default function Users(props) {
  return (
    <div className="product-wrapper">
      {props.users.map((item, index) => (
        <UserCard
          key={item.id}
          onShowMore={() => props.onUserClick(item)}
          user={item}
          onDelete={() => props.onDelete(item)}
          image={"https://i.pravatar.cc/200/200" + index}
        />
      ))}
    </div>
  );
}
