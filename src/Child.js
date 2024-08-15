import React from "react";

export default function Child({ onData }) {
  const sendDataToParent = () => {
    const dataToSend = "hello from child";
    onData(dataToSend);
  };
  return (
    <div>
      <button onClick={sendDataToParent}>click me</button>
    </div>
  );
}
