import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMovie } from "../hook/useFetchMove";
import Link from "next/link";
import Image from "next/image";

export default function Movie({
  dataMovie,
  pathImage,
}: {
  dataMovie: IMovie;
  pathImage: string;
}) {
  return (
    <Link href={`movie/${dataMovie.slug}`}>
      <div className="relative group cursor-pointer overflow-hidden w-fit">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative w-[160px] h-[220px] sm:w-[192px] sm:h-[280px] rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src={pathImage + dataMovie.posterUrl}
              alt={dataMovie.name}
              fill
              sizes="(max-width: 640px) 192px, 207px"
              className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="absolute group-hover:opacity-100 flex opacity-0 inset-0 bg-black/40 pointer-events-none justify-center items-center transform ease-in-out duration-200">
            <FontAwesomeIcon
              className="w-[150px] h-[150px] text-white/40"
              icon={faPlay}
            />
          </div>
          <div className="espisode text-white absolute w-[38px] h-[20px] bg-gray-600 rounded-sm  top-2 left-2  text-[10px] flex items-center justify-center bg-linear-to-r from-amber-500 to-red-500  group-hover:from-red-500 group-hover:to-amber-500 transform ease-in duration-300">
             {dataMovie.year}
          </div>
          <h4 className="w-full block bottom-0 z-10 absolute pl-2 py-2 font-medium bg-black/70 text-white">
            {dataMovie.name}
          </h4>
        </div>
      </div>
    </Link>
  );
}
