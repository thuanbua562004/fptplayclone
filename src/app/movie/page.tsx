import { Metadata } from "next";
import ListMove from "../component/ListMove";
import Panigation from "../component/Panigation";



export const metadata: Metadata = {
  title: 'List Movie',
  description: 'All list movie fpt play clone',
}
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page?: number };
}) {
  const search = await searchParams;
  const page = search.page 
  return (
    <>
    <h5 className="mt-[50px] p-3 text-[20px] font-bold inline-block bg-gradient-to-l from-yellow-400 to-red-500 bg-clip-text text-transparent">
      List all movie
    </h5>
    <ListMove  page={page}/>
    <div className="panigation">
      {page ? <Panigation page={Number(page)}/> :""}
    </div>
    </>
  );
}
