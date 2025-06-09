'use client'
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

export default function Panigation({page =1}:{page:number}) {
  const  [arr,setarr] = useState([1,2,3,4,5,6,7,8])
    const pani = useCallback((number:number, action:string) => {
      console.log(page)
      if(action=='right' && number ==1){
        setarr(pre=> pre.map((item)=>(item)))
        return
      }
      if(action=='right' && number !==1){
        setarr(pre=> pre.map((item)=>(number++)))
        return
      }
      if(action=='next'){
        setarr(pre=> pre.map((item)=>(item = item+1)))
        return;
      }

      if(action=='pre'){
        if ([1,2,3,4,5,6,7,8].includes(number)){
          setarr([1,2,3,4,5,6,7,8])
          return;
        }
        setarr(pre=> pre.map((item)=>(item = item-1)))
        return;
      }
    }, [])

    useEffect(()=>{
      pani(page,'right')
    },[])


  return (

    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-10 sm:px-6 select-none cursor-pointer">
      {/* Mobile view */}
      <div className="flex flex-1 justify-between  sm:hidden">
        <a
            href={`/movie?page=${Number(page)-1}`}

          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
             href={`/movie?page=${Number(page)+1}`}


          className="ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-gray-200">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">10</span> of{" "}
          <span className="font-medium">97</span> results
        </p>

        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          aria-label="Pagination"
        >
          {/* Previous */}
          <a
          onClick={()=>pani(arr[0],'pre')}

            className="inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Page numbers */}
          {arr?.slice(0,3).map((item)=>(
            <Link
            key={item}
             href={`/movie?page=${item}`}

            aria-current="page"
            className={`${item==page ? "bg-amber-500":"bg-gray-400"} z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {item}
          </Link>
          ))}

          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset">
            ...
          </span>
          {arr?.slice(5,arr.length-1).map((item)=>(
            <Link
            href={`/movie?page=${item}`}
            key={item}
            aria-current="page"
            className={`${item==page ? "bg-amber-500":"bg-gray-400"} z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {item}
          </Link>
          ))}


          {/* Next */}
          <a
            onClick={()=>pani(arr[arr.length-1],'next')}
            // href="#"
            className="inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
