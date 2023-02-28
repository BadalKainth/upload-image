import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  function fileSelectedHandler(event) {
    // Create Object URL for img src
    const fileUrl = URL.createObjectURL(event.target.files[0]);

    setSelectedFile(fileUrl);
  }

  return (
    <div className="main">
      <div className="App">
        <p>Click below to uploud file.</p>
        <input type="file" onChange={fileSelectedHandler}></input>
        {selectedFile && <img className="image" src={selectedFile} />}
        {selectedFile && (
          <button onClick={() => setSelectedFile(null)}>Clear</button>
        )}
      </div>
    </div>
  );
}

export default App;
