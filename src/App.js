import { useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  const handleDataFromChild = (childData) => {
    setData(childData);
  };

  return (
    <div className="App">
      <h1>data from child: {data}</h1>
      <Child onData={handleDataFromChild} />{" "}
      {/* Pass the handler function as a prop */}
    </div>
  );
}
