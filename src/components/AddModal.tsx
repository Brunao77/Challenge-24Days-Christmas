import { useRef } from "react";
import {
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { BsFillPencilFill } from "react-icons/bs";

export default function AddModal({ gifts, setGifts }) {
  const giftNameRef = useRef();
  const giftForRef = useRef();
  const giftImgRef = useRef();
  const giftQuantRef = useRef();
  const giftPriceRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAdd = () => {
    const giftName = giftNameRef.current.value;
    const giftFor = giftForRef.current.value;
    const giftUrlImg = giftImgRef.current.value;
    const giftQuant = giftQuantRef.current.value;
    const giftPrice = giftPriceRef.current.value;

    if (giftName === "") return;

    if (!gifts.some((g) => g.object.toLowerCase() === giftName.toLowerCase())) {
      setGifts([
        {
          id: uuidv4(),
          object: giftName,
          forWhom: giftFor,
          urlImg: giftUrlImg,
          quantity: giftQuant,
          price: giftPrice
        },
        ...gifts
      ]);
    } else {
      if (
        !gifts.some((g) => g.forWhom.toLowerCase() === giftFor.toLowerCase())
      ) {
        setGifts([
          {
            id: uuidv4(),
            object: giftName,
            forWhom: giftFor,
            urlImg: giftUrlImg,
            quantity: giftQuant,
            price: giftPrice
          },
          ...gifts
        ]);
      }
    }
  };

  return (
    <>
      <Button
        borderColor="rgb(255, 215, 0,0.7)"
        boxShadow="md"
        rightIcon={<BsFillPencilFill />}
        onClick={onOpen}
        bg="rgb(255, 215, 0,0.7)"
        _hover={{ bg: "rgb(255, 215, 0,1)" }}
        color="white"
        alignSelf="center"
      >
        Añadir Regalo
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Regalo de Navidad</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Stack direction="row">
                <Input
                  ref={giftNameRef}
                  type="text"
                  placeholder="Escriba su regalo aquí..."
                />
                <NumberInput defaultValue={1} min={0}>
                  <NumberInputField ref={giftQuantRef} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <Input
                ref={giftForRef}
                type="text"
                placeholder="Regalo para..."
              />
              <Input
                ref={giftImgRef}
                type="text"
                placeholder="Inserte su imagen aquí..."
              />
              <Input
                ref={giftPriceRef}
                type="text"
                placeholder="Inserte el precio aquí..."
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                handleAdd();
              }}
            >
              Agregar Regalo
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
