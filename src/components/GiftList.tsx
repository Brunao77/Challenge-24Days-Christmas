import React, { useState, useRef } from "react";
import GiftItem from "./GiftItem";

export default function GiftList({ gifts, handleDelete }) {
  return (
    <ul>
      {gifts.map((gift) => (
        <GiftItem key={gift.id} gift={gift} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
