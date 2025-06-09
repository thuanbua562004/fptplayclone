'use client'
import React, { useState } from "react";
import Espisode from "./Espisode";
import { IMovieDetailResponse } from "@/Interface";
import VideoComponent from "./Video";



export default function EpisodesPlayer({data ,  } : {data : IMovieDetailResponse ,}) {
    const [urlVideo , seturlVieo] = useState<string>(data.episodes[0].server_data[0].link_embed)
    function handleSelecEspisode(url: string) {
    seturlVieo(url)
    }

  return (
    <>
      <div className="moviedeital max-w-6xl mx-auto   shadow-2xl  aspect-video  bg-white/40 p-1 rounded-lg ">
        <VideoComponent src={urlVideo}/>
      <div className="list lg:max-w-xl max-w-6xl py-10  ">
        <h5 className="py-4 text-white">List Espisode</h5>
        <div className="grid sm:grid-cols-10 grid-cols-7 gap-2 sm:gap-4  ">
          {data.episodes[0].server_data.map((es, index) => (
            <Espisode key={es.slug} handleSelecEspisode={handleSelecEspisode}  espiso={es} index={index} isSeleted={urlVideo} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
