import axios from "axios";
import Link from "next/link";
import React from "react";

export default async function UserDetails({ params }: any) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  const user = response.data;
  return (
    <div className="mt-4">
      <h1>User Details</h1>
      <hr />

      <table className="table">
        <tbody>
          {Object.keys(user).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <b>{key}</b>
                </td>
                <td>
                  <span>{JSON.stringify(user[key], null, 2)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link href={"/users"}>back to home</Link>
    </div>
  );
}
