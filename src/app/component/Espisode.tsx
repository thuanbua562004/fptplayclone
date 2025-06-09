'use client'
import { IServerData } from '@/Interface'

export default function Espisode({espiso ,index ,handleSelecEspisode ,isSeleted }:{espiso:IServerData , index:number ,handleSelecEspisode:Function ,isSeleted:string }) {
    function selectEpisode(){
        handleSelecEspisode(espiso.link_embed)
    }
    return (
          <div onClick={selectEpisode} className={` ${isSeleted==espiso.link_embed ? "bg-gray-600":"bg-black/90"} espisode text-white cursor-pointer hover:bg-gray-500 w-10 h-10 rounded-lg flex items-center justify-center   outline`}>{index+1}</div>
  )
}
