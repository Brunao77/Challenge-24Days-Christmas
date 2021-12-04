import React, { useState, useRef } from "react";
import GiftItem from "./GiftItem";

export default function GiftList({ gifts, toggleDelete }) {
  return (
    <ul>
      {gifts.map((gift) => (
        <GiftItem key={gift.id} gift={gift} toggleDelete={toggleDelete} />
      ))}
    </ul>
  );
}
