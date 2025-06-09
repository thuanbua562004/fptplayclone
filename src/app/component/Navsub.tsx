import Link from 'next/link';
import React from 'react';

export default function Navsub({styleCss , ref} :{styleCss:object , ref :React.RefObject<HTMLElement|null>}) {
  const subNav = ['Acount', 'Movie', 'Honest', 'Action', 'Comedy', 'Drama'];
  return (
    <nav ref={ref} style={styleCss} className={` transform duration-150 fixed h-screen w-[250px] top-0 z-50  bg-black shadow-lg `}>
      <ul className=' mt-3'>
        {subNav.map((item, index) => (
          <Link  key={item} href={`/${item.toLocaleLowerCase()}`}>
          <li

            className='w-[246px] h-[38px] pl-6 py-2 cursor-pointer text-white bg-black transform ease-in-out duration-150 hover:bg-gray-800'
          >
            {item}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
