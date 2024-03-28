'use client'

import { useState } from "react"
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"

export default function ProductCount({ quantity, product_price, product_rate }: { quantity: number, product_price: number, product_rate: number }) {
    
    // ----------------- 수량 체크 -----------------
    const [count, setCount] = useState(quantity);

    const onMinus = () => {
        if (count == 1) setCount(1)
        else setCount(count - 1);
    }

    const onPlus = () => {
        setCount(count + 1);
    }


    // ------------------- 숫자 쉼표 --------------------
    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    // ----------------- 할인율 ------------------
    function Rate() {
        let n = (100 - product_rate) / 100;
        return (
            <div>
                <div className="text-[12px] line-through text-[#888888]" id="originalPrice">{priceToString(product_price * count)}원</div>
                <div className="text-[17px] font-bold">
                    <em className="not-italic">{priceToString(product_price * ((100 - product_rate) / 100) * count)}</em>
                    <span>원</span>
                </div>
            </div>
        )
    }

    function NotRate() {
        return (
            <div className="text-[17px] font-bold">
                    <em className="not-italic">{priceToString(product_price * count)}</em>
                    <span>원</span>
                </div>
        )
    }


    return (
        <div className="flex tracking-[-0.05rem]">
            <div className="mt-[8px]">
                {product_rate == 0 ? <NotRate/> : <Rate/>}
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