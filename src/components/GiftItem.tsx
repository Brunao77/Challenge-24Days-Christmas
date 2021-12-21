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
        maxW="20vw"
      >
        <Text fontSize="xl">
          {object} ({quantity})
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          {forWhom}
        </Text>
      </Stack>
      <Button
        w="100%"
        maxW="1vw"
        h={8}
        _hover={{ bg: "rgba(255, 0, 0, 0.493)" }}
        backgroundColor="transparent"
        borderColor="rgba(255, 0, 0, 0.5)"
        onClick={handleGiftClick}
      >
        X
      </Button>
    </Stack>
  );
}
