'use client'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MoveTop() {
  const handleClick = () => {
    if(window ){
      window.scroll({
      top: 0,
      behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className='fixed w-10 h-10 rounded-full shadow-lg bottom-5 right-6 z-30 outline outline-black/50 bg-amber-600 flex justify-center items-center cursor-pointer hover:opacity-85'
    >
      <FontAwesomeIcon className='w-6 h-6 text-black' icon={faUpLong} />
    </div>
  );
}
