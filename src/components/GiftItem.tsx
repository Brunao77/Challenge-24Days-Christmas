import React, { useState, useRef } from "react";

export default function GiftItem({ gift, toggleDelete }) {
  const { id, object, deleted } = gift;

  const handleGiftClick = () => {
    toggleDelete(id);
  };

  return (
    <li>
      <input
        type="radio"
        className="gift-check"
        checked={deleted}
        onClick={handleGiftClick}
      />
      <p className="gift-text">{object}</p>
    </li>
  );
}
