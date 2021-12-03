import { useState } from "react";
import "./styles.css";

export default function App() {
  const [gifts, setGifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);

  const handleSubmit = (event) => {
    setGifts(event.target.value);
  };

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <input
        type="submit"
        placeholder="Escriba su regalo aquí..."
        onSubmit={handleSubmit}
      ></input>
      {gifts.map((gift, index) => (
        <p key={index} className="gift-text">
          {gift}
        </p>
      ))}
    </div>
  );
}
