import {
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import GiftItemModal from "./GiftItemModal";

export default function GiftsListModal({ gifts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bg="blackAlpha.600"
        color="whiteAlpha.800"
        alignSelf="center"
      >
        Previsualizar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Regalos de Navidad</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              alignSelf="center"
              padding={3}
              overflowY="auto"
              maxHeight="400px"
            >
              {gifts.map((gift) => (
                <GiftItemModal key={gift.id} gift={gift} />
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                window.print();
                onClose();
              }}
            >
              Imprimir
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
