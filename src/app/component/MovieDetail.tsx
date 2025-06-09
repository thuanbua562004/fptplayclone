import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, } from "@fortawesome/free-solid-svg-icons";
import { IMovieDetailResponse } from "@/Interface";
import EpisodesPlayer from "./EpisodesPlayer";
import Vote from "./Vote";



export default function MovieDetail({data} : {data:IMovieDetailResponse}) {
  
  return (
    <div className="w-full h-full    pb-[150px] pt-7  ">
      {/* ACTION XU LI VIDEO VA CHON TAP */}
      <EpisodesPlayer data={data} key={data.movie.slug}/>

      <div className="content max-w-6xl  mx-auto flex flex-col md:flex-row gap-6 mt-11">
        {/* Bên trái: Thông tin chính */}
        <div className="md:w-1/2">
          <h5 className="text-[20px] font-bold mb-2 ">
            {data.movie.name}
          </h5>
          <h4 className="text-[16px] font-medium mb-4 ">
            {data.movie.origin_name}
          </h4>

          {/* Đánh giá */}
          <Vote/>

          {/* Mô tả */}
        <div dangerouslySetInnerHTML={{ __html: data?.movie?.content }} className="whitespace-pre-wrap text-[14px] " />
        </div>

        {/* Bên phải: Hành động + Diễn viên */}
        <div className="md:w-1/2 flex flex-col gap-4 text-[14px] ">
          {/* Hành động */}
          <hr></hr>
          <div className="flex space-x-5 py-3">
            <label className="flex items-center cursor-pointer">
              <FontAwesomeIcon className="w-6  mr-3" icon={faHeart}></FontAwesomeIcon>
            <span>Follow</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <FontAwesomeIcon className="w-6  mr-3" icon={faShare}></FontAwesomeIcon>
              <span>Share</span>
            </label>
          </div>

          {/* Diễn viên */}
          <div className="flex flex-col gap-2">
            <div className="flex">
              <span className="w-[50px] font-semibold">Actress:</span>
              <span className="ml-4">
                {data.movie.actors}
              </span>
            </div>
            <div className="flex">
              <span className="w-[50px] font-semibold">Director:</span>
              <span className="ml-4">{data.movie.director}</span>
            </div>
            <div className="flex">
              <span className="w-[50px] font-semibold">Year:</span>
              <span className="ml-4">{data.movie.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
