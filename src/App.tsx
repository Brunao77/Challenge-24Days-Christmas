import { useState, useEffect } from "react";
import { Stack, Text, Button, Container } from "@chakra-ui/react";
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

  const handleEdit = (id, newName, newWhom, newUrlImg, newQuantity) => {
    setGifts(
      gifts.map((gift) =>
        gift.id === id
          ? {
              id: id,
              object: `${newName}`,
              forWhom: `${newWhom}`,
              urlImg: `${newUrlImg}`,
              quantity: `${newQuantity}`
            }
          : gift
      )
    );
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
    <Stack
      bg="rgba(255, 255, 255, 0.4)"
      display="flex"
      alignSelf="center"
      textAlign="center"
      borderRadius="20px"
      w="40vw"
      padding={4}
    >
      <Text fontSize="5vw">Regalos:</Text>
      <ModalComponent gifts={gifts} setGifts={setGifts} />
      {gifts.length === 0 ? (
        <Text className="gift-text" fontSize="3vw" padding={3}>
          ¡No hay regalos!
        </Text>
      ) : (
        <GiftList
          gifts={gifts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
      <Button
        onClick={handleDeleteAll}
        color="whiteAlpha.800"
        bg="blackAlpha.600"
        alignSelf="center"
      >
        Borrar Todo
      </Button>
    </Stack>
  );
}
