import React, { useState, useRef } from "react";

export default function GiftItem({ gift, handleDelete }) {
  const { id, object, deleted } = gift;

  const handleGiftClick = () => {
    handleDelete(id);
  };

  return (
    <li>
      <p className="gift-text">{object}</p>
      <button className="delete-btn" onClick={handleGiftClick}>
        X
      </button>
    </li>
  );
}
