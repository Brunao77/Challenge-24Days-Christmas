import React, { useState, useRef } from "react";
import "./styles.css";
import { BsFillPencilFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import GiftList from "./components/GiftList";

export default function App() {
  const giftNameRef = useRef();
  const giftForRef = useRef();

  const [gifts, setGifts] = useState([
    { id: 1, object: "Medias", forWhom: "aa", deleted: false },
    { id: 2, object: "Vitel Tone", forWhom: "bb", deleted: false },
    { id: 3, object: "Caramelos", forWhom: "cc", deleted: false }
  ]);

  const handleAdd = () => {
    const giftName = giftNameRef.current.value;
    const giftFor = giftForRef.current.value;

    if (giftName === "") return;

    if (!gifts.some((g) => g.object.toLowerCase() === giftName.toLowerCase())) {
      setGifts([
        { id: uuidv4(), object: giftName, forWhom: giftFor, deleted: false },
        ...gifts
      ]);
    } else {
      if (
        !gifts.some((g) => g.forWhom.toLowerCase() === giftFor.toLowerCase())
      ) {
        setGifts([
          { id: uuidv4(), object: giftName, forWhom: giftFor, deleted: false },
          ...gifts
        ]);
      }
    }

    giftNameRef.current.value = null;
    giftForRef.current.value = null;
  };

  const handleDelete = (id) => {
    const newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  const handleDeleteAll = () => {
    setGifts([]);
  };

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <div className="container-form">
        <div>
          <input
            ref={giftNameRef}
            type="text"
            placeholder="Escriba su regalo aquí..."
          />
          <input ref={giftForRef} type="text" placeholder="Regalo para..." />
        </div>

        <button type="submit" className="add-btn" onClick={handleAdd}>
          <BsFillPencilFill className="icon-pen" />
        </button>
      </div>
      <GiftList gifts={gifts} handleDelete={handleDelete} />
      <button className="delete-all-btn" onClick={handleDeleteAll}>
        Eliminar Todo
      </button>
    </div>
  );
}
