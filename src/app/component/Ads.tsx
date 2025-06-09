import React from "react";

export default function Ads() {
  return (
    <>
    <div className="mx-auto  overflow-hidden py-3 px-[15px] sm:px-[100px] lg:px-[180px] bg-black">
        <h2 className="text-white font-bold text-xl mb-6">Danh mục</h2>
      <div className="flex justify-between overflow-hidden gap-2.5 ">
        <button
          aria-label="Giải trí"
          className="flex flex-col items-center justify-center rounded-lg min-w-[160px] h-32 bg-gradient-to-r from-[#e26a2c] to-[#f47d2a] text-white font-semibold text-lg shrink-0"
        >
          <img
            alt="Icon of two theatrical masks representing entertainment"
            className="mb-3"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/45cafeef-e327-4097-309b-8af971c6a21b.jpg"
            width={40}
          />
          Giải trí
        </button>
        <button
          aria-label="Podcast"
          className="flex flex-col items-center justify-center rounded-lg min-w-[160px] h-32 bg-gradient-to-r from-[#f47d2a] to-[#ff6a00] text-white font-semibold text-lg shrink-0"
        >
          <img
            alt="Icon of a radio representing podcast"
            className="mb-3"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/d8b426fa-a69e-4b3a-a404-7cab53f6ce90.jpg"
            width={40}
          />
          Podcast
        </button>
        <button
          aria-label="Học tập"
          className="flex flex-col items-center justify-center rounded-lg min-w-[160px] h-32 bg-gradient-to-r from-[#8a1fff] to-[#a52fff] text-white font-semibold text-lg shrink-0"
        >
          <img
            alt="Icon of an open book representing study"
            className="mb-3"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/623b6bea-cee9-4bbe-89a5-2f386b567a5f.jpg"
            width={40}
          />
          Học tập
        </button>
        <button
          aria-label="K+"
          className="flex items-center justify-center rounded-lg min-w-[160px] h-32 bg-gradient-to-r from-[#0f5bff] to-[#0047b3] shrink-0"
        >
          <img
            alt="K+ logo white and red on black background"
            className="object-contain"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/0195ad0f-be75-4c1e-c351-8e41dc9df00c.jpg"
            width={80}
          />
        </button>
        <button
          aria-label="NBA"
          className="flex items-center justify-center rounded-lg min-w-[160px] h-32 bg-gradient-to-r from-[#0072ce] to-[#005ea2] shrink-0"
        >
          <img
            alt="NBA logo white text with red and blue icon on blue background"
            className="object-contain"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/f56428bb-da31-4274-88be-33f93ae98089.jpg"
            width={80}
          />
        </button>

      </div>
    </div>
    </>
  );
}
