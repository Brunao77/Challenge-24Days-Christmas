import React, { useState, useRef } from "react";
import "./styles.css";
import { BsFillPencilFill } from "react-icons/bs";

export default function App() {
  const giftRef = useRef();

  const [gifts, setGifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);

  const handleAdd = () => {
    const gift = giftRef.current.value;
    if (gift === "") return;

    setGifts([gift, ...gifts]);

    giftRef.current.value = null;
  };

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <div className="container-form">
        <input
          ref={giftRef}
          type="text"
          placeholder="Escriba su regalo aquí..."
        />
        <button type="submit" className="add-btn" onClick={handleAdd}>
          <BsFillPencilFill className="icon-pen" />
        </button>
      </div>
      {gifts.map((gift, index) => (
        <p key={index} className="gift-text">
          {gift}
        </p>
      ))}
    </div>
  );
}
