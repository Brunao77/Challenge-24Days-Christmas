import { Stack } from "@chakra-ui/react";
import GiftItem from "./GiftItem";

export default function GiftList({ gifts, handleDelete, handleEdit }) {
  return (
    <Stack alignSelf="center" padding={3} overflowY="auto" maxHeight="400px">
      {gifts.map((gift) => (
        <GiftItem
          key={gift.id}
          gift={gift}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </Stack>
  );
}
