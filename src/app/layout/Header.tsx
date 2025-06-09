'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { indexAccess } from '../access'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import Navsub from '../component/Navsub'
import Button, { sizeBtn } from '../component/Button'
import Link from 'next/link'
import Login from '../component/Login'
import Notify from '../component/Notify'

export default function Header() {
  const [isOpenNav , setIsOpenNav] = useState<boolean>(false)
  const [isOpenLogin , setIisOpenLogin] = useState<boolean>(false)
  const [isOpenSearch , setIisOpenSearch] = useState<boolean>(false)
  const [isOpenNotify , setOpenNotify] = useState<boolean>(false)
  function handOpnedSubNav (isboolen : boolean){
    setIsOpenNav(isboolen)
  }
  function handOpnedLogin (isboolen : boolean){
    setIisOpenLogin(isboolen)
  }

  ////notifi
  const refNotifi = useRef<HTMLElement>(null);
  ///sub nav
  const refSubNav = useRef<HTMLElement>(null);
  const styleOpen = {
    transform: isOpenNav ? "translateX(0%)" : "translateX(-100%)",
  };
  useEffect(()=>{
    function handerClose (e : MouseEvent){
      let mosedown = e.target as HTMLElement | null;
      if(!refSubNav.current?.contains(mosedown)){
        handOpnedSubNav(false)
      }

      if(!refNotifi.current?.contains(mosedown)){
      console.log('check')
        setIsOpenNav(false)
      }
    }
    document.addEventListener('mousedown' ,handerClose)

    return ()=>{
      removeEventListener('mousedown' ,handerClose)
    }
  },[refSubNav])


  return (
<>
    <header className="relative h-[80px] w-full flex bg-black  px-[15px] select-none  sm:px-[100px] lg:px-[180px] items-center sm:justify-between justify-between shadow-lg">
    <div className='flex items-center'>
    <div className=' sm:hidden' onClick={()=>handOpnedSubNav(true)}><FontAwesomeIcon className="w-[24px] text-white mx-2   font-light  cursor-pointer" icon={faBars}></FontAwesomeIcon></div>
    <Link href={'/'}><Image className='w-[125px]' src={indexAccess.logoFpt} alt="logo"></Image></Link>
    </div>
      <nav className="list flex-1 text-white hidden sm:block ">
        <ul className="list flex  items-center justify-start">
          <Link href={'/'}><li className='w-[80px] h-[40px] flex justify-center items-center cursor-pointer hover:text-amber-600'>Home</li></Link>
          <Link href={'/movie?page=1'}><li className='w-[80px] h-[40px] flex justify-center items-center cursor-pointer hover:text-amber-600'>Movie</li></Link>
          <li className="relative group w-[80px] h-[40px] flex justify-center items-center cursor-pointer hover:text-amber-600">
            More
            <FontAwesomeIcon className="w-4 pl-1" icon={faAngleDown} />
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:flex flex-col bg-gray-950 py-1 shadow-lg w-[200px] top-8 mt-2 left-3 rounded-md p-2 space-y-1 text-white z-10">
              <li className="hover:text-amber-500 cursor-pointer py-1 hover:bg-gray-700">China </li>
              <li className="hover:text-amber-500 cursor-pointer py-1 hover:bg-gray-700">Vietnamese</li>
              <li className="hover:text-amber-500 cursor-pointer py-1 hover:bg-gray-700">American</li>
              <li className="hover:text-amber-500 cursor-pointer py-1 hover:bg-gray-700">Korea </li>
            </ul>
          </li>

        </ul>
      </nav>
      <nav className="action flex text-white items-center  ">
          <div className='flex items-center'>
            <input type='text' className={` hidden sm:block   rounded-lg 
            transition-all duration-300 ease-in-out  text-[13px] text-gray-400
      ${isOpenSearch ? "w-40 p-1 outline-amber-600 outline" : "w-0 px-0"} overflow-hidden`}></input> 
            <FontAwesomeIcon onClick={()=>setIisOpenSearch(true)} className="w-[24px] text-white mx-2 font-light cursor-pointer hover:text-amber-600" icon={faSearch}>
            </FontAwesomeIcon>
          </div>
          
          <div onClick={()=>setOpenNotify(!isOpenNotify)} className='relative'>
            <FontAwesomeIcon className="w-[24px] text-white  mx-2 font-light  cursor-pointer hover:text-amber-600" icon={faBell}>
            </FontAwesomeIcon>
            <Notify open={isOpenNotify} handleOpen={handOpnedLogin} />
          </div>
          
          <div className='w-fit h-fit hidden sm:block'><Button size={sizeBtn.small}  text={'Buy'} key={'login'}/></div>
          <div onClick={()=>(setIisOpenLogin(true))} className='px-1   sm:block cursor-pointer hover:text-amber-600 pl-2'>Login</div>
      </nav>
    </header>
    <Navsub  styleCss={styleOpen} ref={refSubNav} />
    <Login handleOpen={handOpnedLogin} isLogin={isOpenLogin}/>
</>
  )
}
