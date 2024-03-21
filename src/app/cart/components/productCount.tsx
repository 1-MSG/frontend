'use client'

import { useRef, useState } from "react"
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"

export default function ProductCount({ quantity, product_price, product_rate, pullCount }: { quantity: number, product_price: number, product_rate:number, pullCount: Function }) {
    const [count, setCount] = useState(quantity);

    const onMinus = () => {
        if(count == 1) setCount(1)
        else setCount(count - 1);
        
    }

    const onPlus = () => {
        setCount(count + 1);
    }

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    let total = 0;
    total = count * product_price

    

    pullCount(total);

    return (
        <div className="flex tracking-[-0.05rem]">
            <div className="mt-[8px]">
                <div className="text-[12px] line-through" id="originalPrice">{priceToString(product_price * count)}원</div>

                <div className="text-[17px] font-bold">
                    <em className="not-italic">{priceToString(product_price * ((100 - product_rate) / 100) * count)}</em>
                    <span>원</span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={onMinus} className=""><Minus /></button>
                <div className="table-cell w-[40px] h-[31px] text-[14px] font-semibold text-center pt-[5px]">
                    {count}
                </div>
                <button onClick={onPlus}><Plus /></button>
            </div>
        </div>

    )
}