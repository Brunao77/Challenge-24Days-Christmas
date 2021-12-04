import React, { useState, useRef } from "react";
import "./styles.css";
import { BsFillPencilFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import GiftList from "./components/GiftList";

export default function App() {
  const giftRef = useRef();

  const [gifts, setGifts] = useState([
    { id: 1, object: "Medias", deleted: false },
    { id: 2, object: "Vitel Tone", deleted: false },
    { id: 3, object: "Caramelos", deleted: false }
  ]);

  const handleAdd = () => {
    const gift = giftRef.current.value;

    if (gift === "") return;

    setGifts([{ id: uuidv4(), object: gift, deleted: false }, ...gifts]);

    giftRef.current.value = null;
  };

  const toggleDelete = (id) => {
    const newGifts = [...gifts];
    const gift = newGifts.find((gift) => gift.id === id);
    gift.deleted = !gift.deleted;
    setGifts(newGifts);
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
      <GiftList gifts={gifts} toggleDelete={toggleDelete} />
    </div>
  );
}
