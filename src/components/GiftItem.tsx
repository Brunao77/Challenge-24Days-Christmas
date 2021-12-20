import { Button, Image, Tr, Td, Stack, Text } from "@chakra-ui/react";

export default function GiftItem({ gift, handleDelete }) {
  const { id, object, forWhom, urlImg, quantity } = gift;

  const handleGiftClick = () => {
    handleDelete(id);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={10}>
      <Image src={urlImg} boxSize="50px" objectFit="cover" />
      <Stack
        spacing={0}
        lineHeight={1}
        textAlign="initial"
        justifyContent="center"
        w="100%"
        maxW="10vw"
      >
        <Text fontSize="xl" color="whiteAlpha.800">
          {object}
        </Text>
        <Text fontSize="sm" color="whiteAlpha.500">
          {forWhom}
        </Text>
      </Stack>
      <Text textAlign="center" AlignSelf="center">
        x{quantity}
      </Text>
      <Button onClick={handleGiftClick}>X</Button>
    </Stack>
  );
}
