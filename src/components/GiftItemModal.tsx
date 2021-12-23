import { Image, Stack, Text } from "@chakra-ui/react";

export default function GiftItemModal({ gift }) {
  const { object, forWhom, urlImg, quantity } = gift;

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
    </Stack>
  );
}
