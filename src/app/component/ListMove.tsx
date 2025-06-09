
import React from 'react'
import Movie from './Movie'
import { IMovie } from '../hook/useFetchMove'

export default async function ListMove({ page =1 }: { page ?:number }) {

  const result = await fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
  const data = await result.json()
          let mapData = data?.items?.map((item: any) => {
          return {
            id: item._id,
            name: item?.name,
            slug: item.slug,
            originName: item.origin_name,
            thumbUrl: item.thumb_url,
            posterUrl: item.poster_url,
            year: item.year,
          };
        });
  return (
    <>
    <div className='flex items-center justify-center   py-10'>
      <div className='grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5  '>
        {mapData?.map((item : IMovie)=>(
            <Movie key={item.id} dataMovie={item} pathImage={data.pathImage}/>
        ))}
      </div>
    </div>
    </>
  )
}
