import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Home from "./screens/Home";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/phones")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="BallTriangle" color="#1b3a4b" height={150} width={150} />
      </div>
    );
  } else {
    return <div>{<Home items={data.data} />}</div>;
  }
}

export default App;
