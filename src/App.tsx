import { useState, useEffect } from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
//import "./styles.css";
import GiftList from "./components/GiftList";
import ModalComponent from "./components/ModalComponent";

export default function App() {
  const [gifts, setGifts] = useState([
    { id: 1, object: "Medias", forWhom: "aa", urlImg: "", quantity: "1" },
    { id: 2, object: "Vitel Tone", forWhom: "bb", urlImg: "", quantity: "1" },
    { id: 3, object: "Caramelos", forWhom: "cc", urlImg: "", quantity: "1" }
  ]);

  const handleDelete = (id) => {
    const newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  const handleDeleteAll = () => {
    setGifts([]);
  };

  useEffect(() => {
    const storedGifts = JSON.parse(localStorage.getItem("giftsApp"));
    if (storedGifts) {
      setGifts(storedGifts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("giftsApp", JSON.stringify(gifts));
  }, [gifts]);

  return (
    <Stack justifyItems="center" alignSelf="center" textAlign="center">
      <Text>Regalos:</Text>
      <ModalComponent gifts={gifts} setGifts={setGifts} />
      {gifts.length === 0 ? (
        <Text className="gift-text">No hay regalos</Text>
      ) : (
        <GiftList gifts={gifts} handleDelete={handleDelete} />
      )}
      <Button onClick={handleDeleteAll}>Borrar Todo</Button>
    </Stack>
  );
}
