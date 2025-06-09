import { Metadata } from 'next';
import MovieDetail from '@/app/component/MovieDetail';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await(params)
  const response = await fetch(`https://ophim1.com/phim/${id}`);
  const data = await response.json();
  
  return {
    title:  'Phim hay nhất : ' + data.movie.name  || 'Phim hay nhất' ,
    description: data.movie.origin_name || 'Xem phim miễn phí chất lượng cao!',
  };
}

export default async function Page({ params }: { params:Promise<{ id: string }> }) {
  const { id } = await(params)
  const response = await fetch(`https://ophim1.com/phim/${id}`);
  const movieDetail = await response.json();
  if(movieDetail.status == false){
    redirect('/')
  }

  return (
    <>
      <MovieDetail data={movieDetail} />
    </>
  );
}
