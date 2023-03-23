import React from "react";

const data = new Array(26).fill(0).map((item, index) => {
  return String.fromCharCode(index + 65);
});

export default function ABCD() {
  return (
    <table>
      {data.map((alpha) => {
        return (
          <tr>
            <td>{alpha}</td>
          </tr>
        );
      })}
    </table>
  );
}
