import Users from "@/components/Users";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default async function page() {
  console.log("Users Page Rendering...");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="mt-5">
      <h1>Users List </h1>

      <Link href={"/"}>Home</Link>
      <hr />
      <Users users={response.data} />
    </div>
  );
}
