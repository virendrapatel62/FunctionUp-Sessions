import axios from "axios";
import React, { useEffect, useState } from "react";

export function useUsers(init) {
  const [users, setUsers] = useState(init);
  useEffect(() => {
    axios.get("/users.json").then((response) => {
      setUsers(
        response.data.map((user) => {
          user.marks = Math.round(Math.random() * 100);
          return user;
        })
      );
    });
  }, []);

  return [users, setUsers];
}
