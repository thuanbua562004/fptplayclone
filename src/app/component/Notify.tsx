'use client'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Notify({ open ,handleOpen} : {open:boolean ,handleOpen:Function}) {
  return (
    <div  className={`${open? "":"hidden"} notify absolute w-[300px] p-4 bg-black rounded-sm z-20 shadow-2xl mt-6  right-4 sm:left-2`}>
        <h4 className='text-white/60'>Notify new</h4>
        <hr/>
        <div className='item-notify hidden items-center py-3  '>
            <div className="icon text-[14px] px-4"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></div>
            <p className='text-[13px] line-clamp-2 font-medium'>Indiana Pacers - Oklahoma City Thunder: Phát lại</p>
        </div>


        {/* neu chua login? */}
        <div className='p-3 flex'>
            <p className='text-white text-[13px]'>Please,</p>
            <p onClick={()=>handleOpen(true)} className='text-amber-500 font-medium text-[13px] px-1 cursor-pointer'>Login</p>
            <p className=' text-white text-[13px]'>for recieve notify from Fpt !</p>
        </div>
    </div>
  )
}
