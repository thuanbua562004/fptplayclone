"use client";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button, { sizeBtn } from "./Button";

export default function Carousel() {

const [current , setCurrent ] = useState(1)

const renderDots = Array.from({ length: 2 }, (_, i) => (
  <div
    onClick={()=>setCurrent(i)}
    key={i}
    className={` ${current==i ? 'bg-amber-600 ':'bg-white'} point w-[15px] h-[15px] rounded-full cursor-pointer`}
  ></div>
));

function handlerMove(action: string) {
  const domCarousel = document.querySelector(".carousel") as HTMLElement; 
  if (!domCarousel) return;

  const maxIndex = domCarousel.children.length - 1;

  if (action === "left" && current > 0) {
    setCurrent(current-1)
  } else if (action === "right" && current < maxIndex) {
    setCurrent(current+1)
  }


}
useEffect(() => {
  const i = setInterval(() => {
    const domCarousel = document.querySelector(".carousel") as HTMLElement; 
    const countCarousel = domCarousel.children.length - 1;

    setCurrent(pre => {
      if (pre >= countCarousel) {
        return 0;
      } else {
        return pre + 1;
      }
    });
  }, 5000);

  return () => clearInterval(i);
}, []);

  useEffect(()=>{
  const domCarousel = document.querySelector(".carousel") as HTMLElement; 
  const itemWidth = domCarousel.children[0].clientWidth;

  domCarousel.style.transform = `translateX(-${itemWidth * current}px)`;
  domCarousel.style.transition = "transform 0.3s ease";
  },[current])

  return (
    <>
      <div className="relative sm:max-w-3xl lg:max-w-6xl  h-[200px] sm:h-[270px] lg:h-[460px] sm:rounded-2xl   overflow-hidden mx-auto select-none ">

      <div className="flex carousel h-fit  transition  ease-linear pt-3 sm:rounded-2xl ">
          <img
            className=" object-cover w-full h-full item-carousel sm:rounded-2xl "
            src="https://image.tmdb.org/t/p/original/pP5Bkg0O4RYBMLtFu3GZAzHiTNv.jpg"
            alt="1"
          />
          <img
            className=" object-cover w-full h-full item-carousel sm:rounded-2xl"
            src="https://daknong.1cdn.vn/2025/05/23/gioi-thieu-ve-phim-chin-manh-ghep-bi-an-nine-puzzles-.jpg"
            alt="2"
          />
      </div> 

      <div className="content-carousel absolute bottom-5 left-1/5   lg:bottom-9 lg:left-9 w-[400px] h-fit">
        <div className="name text-white text-[24px] font-bold ">Nine pluzzes</div>
        <div className="time text-white shadow-lg w-[100px] bg-gray-400/30  rounded-sm text-[12px] my-4 pl-3  ">Esp 15</div>
        <div className="flex"><Button  size={sizeBtn.medium} text="Watch now" key={'watch'}></Button></div>
      </div>

        <div
          onClick={() => handlerMove("left")}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-gray-700"
        >
          <FontAwesomeIcon
            className="w-[25px] h-[25px] text-white "
            icon={faAngleLeft}
          ></FontAwesomeIcon>
        </div>
        <div
          onClick={() => handlerMove("right")}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-gray-700"
        >
          <FontAwesomeIcon
            className="w-[25px] h-[25px] text-white "
            icon={faAngleRight}
          ></FontAwesomeIcon>
        </div>

        <div className="point-move absolute  bottom-5 right-5 flex gap-1.5 ">
          {renderDots}
        </div>
      </div>
    </>
  );
}
