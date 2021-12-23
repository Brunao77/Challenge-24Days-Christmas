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
  useDisclosure,
  Icon
} from "@chakra-ui/react";
import GiftItemPreviewModal from "./GiftItemPreviewModal";
import { IoIosListBox } from "react-icons/io";

export default function PreviewModal({ gifts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        borderColor="whatsapp.500"
        boxShadow="sm"
        onClick={onOpen}
        bg="whatsapp.500"
        _hover={{ bg: "whatsapp.600" }}
        color="white"
        alignSelf="center"
      >
        <Icon as={IoIosListBox} />
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
                <GiftItemPreviewModal key={gift.id} gift={gift} />
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
