import { Table, Thead, Th, Tr, Tbody, Stack } from "@chakra-ui/react";
import GiftItem from "./GiftItem";

export default function GiftList({ gifts, handleDelete }) {
  return (
    <Stack alignSelf="center" padding={3}>
      {gifts.map((gift) => (
        <GiftItem key={gift.id} gift={gift} handleDelete={handleDelete} />
      ))}
    </Stack>
  );
}
