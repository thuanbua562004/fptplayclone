'use client';

import { indexAccess } from "../access";

export default function VideoComponent({ src }: { src: string }) {
  if (!src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
        <img
          src={indexAccess.imgEror.src} 
          alt="Error"
          className="w-full hful object-contain mb-2 rounded-lg"
        />
      </div>
    );
  }

  return (
    <iframe
      className="w-full h-full rounded-lg border border-gray-300"
      src={src}
      allowFullScreen
    />
  );
}
