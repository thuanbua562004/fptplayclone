import { useEffect, useState } from "react";
import { Iproducts } from "./produc";

export default function useCart (){
    const [cart ,setCart] = useState<Iproducts[]>([])

    const getCart = ()=>{
        return cart
    }
    const addCart = (product : Iproducts)=>{
        let check = cart.find((item)=> item.id == product.id)
        if(!check){
            setCart(pre=> [...pre ,product])
            return
        }
        console.log('san pham da co ')
    }


    return {addCart ,getCart}
}