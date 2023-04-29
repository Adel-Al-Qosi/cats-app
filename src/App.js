import React, { useState } from "react";
import fetchCatImage from "./api";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = () => {
    fetchCatImage()
      .then((url) => setImageUrl(url))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={handleClick}>Get cat image</button>
      {imageUrl && <img src={imageUrl} alt="A cute cat" />}
    </div>
  );
}

export default App;
