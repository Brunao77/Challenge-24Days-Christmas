import React, { useState, useRef } from "react";

export default function GiftItem({ gift, handleDelete }) {
  const { id, object, forWhom, urlImg, deleted } = gift;

  const handleGiftClick = () => {
    handleDelete(id);
  };

  return (
    <li>
      <img src={urlImg} />
      <p className="gift-text">{object}</p>
      <p className="gift-text">{forWhom}</p>
      <button className="delete-btn" onClick={handleGiftClick}>
        X
      </button>
    </li>
  );
}
