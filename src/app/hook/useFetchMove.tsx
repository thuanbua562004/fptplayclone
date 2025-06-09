"use client";

import { useState, useEffect } from "react";

export interface IMovie {
  id: string;
  name: string;
  slug: string;
  originName: string;
  thumbUrl: string;
  posterUrl: string;
  year: number;
}


export function useFetchMovie() {
  const [data, setData] = useState<IMovie[]>([]);
  const [pathImage, setpathImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1"
        );
        const data = await response.json();
        console.log(data)
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
        setData(mapData)
        setpathImage(data.pathImage)
      } catch (err) {
        console.log(err)
      } 
    };

    fetchData();
  }, []);


  async function fetchMovieDetail(slug: string) {
    const url = `https://ophim1.com/phim/${slug}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const movieDetail = await response.json();
      return movieDetail;
    } catch (error) {
      console.error(error);
      throw error; // để phía ngoài có thể xử lý tiếp
    }
  }

  return { data ,pathImage ,fetchMovieDetail};
}
