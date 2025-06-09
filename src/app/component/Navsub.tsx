import Link from 'next/link';
import React from 'react';

export default function Navsub({styleCss , ref} :{styleCss:object , ref :React.RefObject<HTMLElement|null>}) {
const subNav = [
  { title: 'Acount', href: '/acount' },
  { title: 'Movie', href: '/movie?page=1' },
  { title: 'Honest', href: '/honest' },
  { title: 'Action', href: '/action' },
  { title: 'Comedy', href: '/comedy' },
  { title: 'Drama', href: '/drama' },
]
  return (
    <nav ref={ref} style={styleCss} className={` transform duration-150 fixed h-screen w-[250px] top-0 z-50  bg-black shadow-lg `}>
      <ul className=' mt-3'>
        {subNav.map((item) => (
          <Link  key={item.title} href={`${item.href}`}>
          <li

            className='w-[246px] h-[38px] pl-6 py-2 cursor-pointer text-white bg-black transform ease-in-out duration-150 hover:bg-gray-800'
          >
            {item.title}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
