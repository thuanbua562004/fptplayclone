'use client';
import React from "react";
import { Iproducts } from "../lib/produc";

export default function Product({ product }: { product: Iproducts }) {
  return (
    <div className="w-[200px] h-[200px] p-2 shadow-lg rounded-lg ">
        <img src={product.image} alt={product.name} width={200} height={200} />
        <div className="title font-medium text-gray-400">{product.name}</div>
        <div className="price text-red-300">{product.price}</div>
    </div>
  );
}
