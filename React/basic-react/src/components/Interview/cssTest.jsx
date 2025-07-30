import React, { useState } from "react";
import "./index.css";
import Child from "./child";

// 100k

export default function CssTest() {
  const [name, setName] = useState("");
  return (
    <main>
      <h1>This is parent</h1>
      <Child data={setName} />
    </main>
  );
}
