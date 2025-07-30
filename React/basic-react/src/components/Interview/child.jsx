import React from "react";

export default function Child({ data }) {
  return (
    <div>
      <p>This is child</p>
      <p>Name: {data}</p>
    </div>
  );
}
