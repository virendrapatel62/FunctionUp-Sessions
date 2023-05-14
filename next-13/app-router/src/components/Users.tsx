"use client";

import Link from "next/link";
import React from "react";

export default function Users({ users }: any) {
  console.log("User Component..");

  return (
    <div>
      <ul className="list-group">
        {users.map((user: any) => {
          return (
            <li
              key={user.id}
              onClick={() => {
                console.log("Clicked on user");
              }}
              className="list-group-item"
            >
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
