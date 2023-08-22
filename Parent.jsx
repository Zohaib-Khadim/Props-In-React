import React, { useState } from "react";
import Childtest from "./Child1";

const Parent = () => {
  const [receivedData, setReceivedData] = useState("");

  // Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      {/* <h1>Parent Aba G</h1> */}
      <p>Data received from child: {receivedData}</p>
      <Childtest onDataReceived={handleDataFromChild} /> {/* Pass the callback function as a prop */}
    </div>
  );
};

export default Parent;
