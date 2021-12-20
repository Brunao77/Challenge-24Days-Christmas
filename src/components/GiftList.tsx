import { Table, Thead, Th, Tr, Tbody } from "@chakra-ui/react";
import GiftItem from "./GiftItem";

export default function GiftList({ gifts, handleDelete }) {
  return (
    <Table>
      <Thead direction="row">
        <Tr>
          <Th></Th>
          <Th>Regalo</Th>
          <Th>Para</Th>
          <Th>Cantidad</Th>
          <Th>Eliminar</Th>
        </Tr>
      </Thead>
      <Tbody>
        {gifts.map((gift) => (
          <GiftItem key={gift.id} gift={gift} handleDelete={handleDelete} />
        ))}
      </Tbody>
    </Table>
  );
}
