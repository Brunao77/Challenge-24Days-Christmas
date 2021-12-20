import { Button, Image, Tr, Td } from "@chakra-ui/react";

export default function GiftItem({ gift, handleDelete }) {
  const { id, object, forWhom, urlImg, quantity } = gift;

  const handleGiftClick = () => {
    handleDelete(id);
  };

  return (
    <Tr>
      <Td>
        <Image src={urlImg} />
      </Td>
      <Td className="gift-text">{object}</Td>
      <Td className="gift-text">{forWhom}</Td>
      <Td>{quantity}</Td>
      <Td>
        <Button className="delete-btn" onClick={handleGiftClick}>
          X
        </Button>
      </Td>
    </Tr>
  );
}
