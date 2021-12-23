import { useState, useEffect } from "react";
import { Stack, Text, Button, Icon } from "@chakra-ui/react";
import GiftList from "./components/GiftList";
import AddModal from "./components/AddModal";
import PreviewModal from "./components/PreviewModal";
import { MdDelete } from "react-icons/md";

export default function App() {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      object: "Medias",
      forWhom: "aa",
      urlImg: "",
      quantity: 1,
      price: 100
    },
    {
      id: 2,
      object: "Vitel Tone",
      forWhom: "bb",
      urlImg: "",
      quantity: 1,
      price: 200
    },
    {
      id: 3,
      object: "Caramelos",
      forWhom: "cc",
      urlImg: "",
      quantity: 1,
      price: 200
    }
  ]);

  const handleDelete = (id) => {
    const newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  const handleEdit = (
    id,
    newName,
    newWhom,
    newUrlImg,
    newQuantity,
    newPrice
  ) => {
    setGifts(
      gifts.map((gift) =>
        gift.id === id
          ? {
              id: id,
              object: `${newName}`,
              forWhom: `${newWhom}`,
              urlImg: `${newUrlImg}`,
              quantity: parseInt(newQuantity),
              price: parseInt(newPrice)
            }
          : gift
      )
    );
  };

  const handleDeleteAll = () => {
    setGifts([]);
  };

  const totalPrices = () => {
    let TotalPrices = 0;
    gifts.map((gift) => {
      TotalPrices += gift.price * gift.quantity;
    });
    return TotalPrices;
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
      boxShadow="sm"
      bg="rgba(255, 255, 255, 0.4)"
      display="flex"
      alignSelf="center"
      textAlign="center"
      borderRadius="20px"
      w="550px"
      padding={4}
    >
      <Text fontSize="5vw">Regalos:</Text>
      <AddModal gifts={gifts} setGifts={setGifts} />
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
      {gifts.length !== 0 ? (
        <Stack>
          {!isNaN(totalPrices()) ? <Text>Total: $ {totalPrices()}</Text> : ""}
          <Stack direction="row" alignSelf="center">
            <Button
              borderColor="red.500"
              boxShadow="sm"
              onClick={handleDeleteAll}
              color="white"
              bg="red.500"
              _hover={{ bg: "red.600" }}
              alignSelf="center"
            >
              <Icon as={MdDelete} />
            </Button>
            <PreviewModal gifts={gifts} />
          </Stack>
        </Stack>
      ) : (
        ""
      )}
    </Stack>
  );
}
