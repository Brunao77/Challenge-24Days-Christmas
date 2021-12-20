import { useState, useEffect } from "react";
import { Stack, Text, Button, Container } from "@chakra-ui/react";
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
    <Container
      w="100%"
      maxW="100vw"
      h="100vh"
      backgroundImage="url('https://fondosmil.com/fondo/10472.jpg')"
      backgroundRepeat="no-repeat"
    >
      <Stack
        bg="transparent"
        justifyItems="center"
        alignSelf="center"
        textAlign="center"
        w="70vw"
      >
        <Text>Regalos:</Text>
        <ModalComponent gifts={gifts} setGifts={setGifts} />
        {gifts.length === 0 ? (
          <Text className="gift-text">No hay regalos</Text>
        ) : (
          <GiftList gifts={gifts} handleDelete={handleDelete} />
        )}
        <Button onClick={handleDeleteAll} alignSelf="center">
          Borrar Todo
        </Button>
      </Stack>
    </Container>
  );
}
