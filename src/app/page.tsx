import { Metadata } from "next";
import Carousel from "./component/Carousel";
import ListMove from "./component/ListMove";
import MoveTop from "./component/MoveTop";

export const metadata: Metadata = {
  title: 'Fpt Play clone',
  description: 'This is home page fpt play clone !',
}

export default function Home() {
  return (
    <>
    <MoveTop/>
    <Carousel/>

    <div className="mx-auto xl:w-[1120px] ">
    <h5 className=" text-start sm:mt-[100px] p-3 text-[20px] font-bold inline-block bg-gradient-to-l from-yellow-400 to-red-500 bg-clip-text text-transparent">
      Movie new update
    </h5></div>

    <ListMove/>
    </>
  );
}
