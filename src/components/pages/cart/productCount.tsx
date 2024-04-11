'use client'

import { useState } from "react"
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"

export default function ProductCount({ 
    quantity, productPrice, discountPrice, GetPrice, cartId
}: { 
    quantity: number, productPrice: number, discountPrice: number, GetPrice:Function, cartId: number
}) {
    
    // ----------------- 수량 체크 -----------------
    const [count, setCount] = useState(quantity);

    const onMinus = () => {
        if (count == 1) setCount(1)
        else setCount(count - 1);
    }

    const onPlus = () => {
        setCount(count + 1);
    }

    // ----------------- 할인율 ------------------
    function Rate() {
        return (
            <div>
                <div className="text-[12px] line-through text-[#888888]" id="originalPrice">{(productPrice * count).toLocaleString()}원</div>
                <div className="text-[17px] font-bold">
                    <em className="not-italic">{(discountPrice * count).toLocaleString()}</em>
                    <span>원</span>
                </div>
            </div>
        )
    }

    function NotRate() {
        return (
            <div className="text-[17px] font-bold">
                    <em className="not-italic">{(productPrice * count).toLocaleString()}</em>
                    <span>원</span>
                </div>
        )
    }

    const salePrice = count * discountPrice;
    GetPrice(cartId, salePrice, count);


    return (
        <div className="flex tracking-[-0.05rem]">
            <div className="mt-[8px]">
                {discountPrice == 0 ? <NotRate/> : <Rate/>}
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