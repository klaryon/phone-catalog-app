import React, { useState, useEffect } from "react";
import Home from "./screens/Home";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/phones")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return <div>{!data ? "Loading..." : <Home />}</div>;
}

export default App;
