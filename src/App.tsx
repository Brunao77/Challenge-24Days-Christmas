import { useState } from "react";
import "./styles.css";

export default function App() {
  const [gifts, setGifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);

  return (
    <div className="App">
      <h1>Regalos:</h1>
      {gifts.map((gift, index) => (
        <p key={index} className="gift-text">
          {gift}
        </p>
      ))}
    </div>
  );
}
