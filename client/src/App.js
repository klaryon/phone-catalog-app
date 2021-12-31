import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/phones")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data.data[0].name}</p>
      </header>
    </div>
  );
}

export default App;
