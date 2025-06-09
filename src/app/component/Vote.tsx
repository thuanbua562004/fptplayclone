'use client'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Vote() {
  const [vote, setVote] = useState(0);

  // Tạo 5 ngôi sao, màu sẽ phụ thuộc vào giá trị vote
  const renderStars = Array.from({ length: 5 }).map((_, index) => (
    <div
      className="relative cursor-pointer"
      key={index}
      onClick={() => setVote(index + 1)} // Tăng vote khi click
    >
      <FontAwesomeIcon
        icon={faStar}
        className={`hover:text-yellow-400 ${
          index < vote ? "text-yellow-400" : "text-gray-400"
        }`}
      />
    </div>
  ));

  return (
    <div className="flex items-center mb-4">
      <FontAwesomeIcon className="w-4 text-yellow-400 mr-1" icon={faStar} />
      <span className="text-[14px] font-semibold mr-3">4,7 (13)</span>
      <div className="flex space-x-1">{renderStars}</div>
    </div>
  );
}
