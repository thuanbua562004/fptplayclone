import React from 'react'
export  enum sizeBtn {
  large = 'large',
  medium = 'medium',
  small = 'small',
}


export default function Button({text,size}:{text:string , size :sizeBtn}) {
  const buttonSize =
    size === 'large'
      ? 'w-[375px] h-[35px]'
      : size === 'medium'
      ? 'w-[150px] h-[35px]'
      : 'w-[113px] h-[35px]';
  return (
    <button className={` ${buttonSize} rounded-lg  bg-amber-600     cursor-pointer hover:opacity-90`}>{text}</button>
  )
}
