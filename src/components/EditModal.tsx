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

export default function EditModal({
  id,
  title,
  quantity,
  forWhom,
  urlImg,
  handleEdit
}) {
  const giftNameRef = useRef();
  const giftForRef = useRef();
  const giftImgRef = useRef();
  const giftQuantRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGiftEditClick = () => {
    const giftName = giftNameRef.current.value;
    const giftFor = giftForRef.current.value;
    const giftUrlImg = giftImgRef.current.value;
    const giftQuant = giftQuantRef.current.value;

    handleEdit(id, giftName, giftFor, giftUrlImg, giftQuant);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w="100%"
        maxW="1vw"
        h={8}
        _hover={{ bg: "rgba(0, 17, 255, 0.432)" }}
        backgroundColor="transparent"
        borderColor="rgba(0, 17, 255, 0.5)"
      >
        Edit
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
                  defaultValue={title}
                  type="text"
                  placeholder="Escriba su regalo aquí..."
                />
                <NumberInput defaultValue={quantity} min={0}>
                  <NumberInputField ref={giftQuantRef} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <Input
                ref={giftForRef}
                defaultValue={forWhom}
                type="text"
                placeholder="Regalo para..."
              />
              <Input
                ref={giftImgRef}
                defaultValue={urlImg}
                type="text"
                placeholder="Inserte su imagen aquí..."
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                handleGiftEditClick();
              }}
            >
              Editar Regalo
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
