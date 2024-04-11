import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"
import { useState } from "react";

export default function ProductDetailCount({
    getPrice2, index, discountPrice
} : {
    getPrice2: any, index: number, discountPrice: number
}) {

    // const product_price = props.product_price;
    // const product_rate = props.product_rate;
    // const { getPrice2 } = props
    // const index = props.index

    const [count, setCount] = useState(1);

    const onMinus = () => {
        if (count == 1) setCount(1)
        else setCount(count - 1);
    }

    const onPlus = () => {
        setCount(count + 1);
    }

    const salePrice = count * discountPrice;
    getPrice2(index, salePrice, count);

    return (
        <div className="flex">
            <div className="mt-[25px] h-[33px] flex">
                <button onClick={onMinus} className="bg-white w-[24px] h-[24px] text-center"><Minus /></button>
                <div className="bg-white text-[14px] leading-[33px] w-[34px] h-[24px] content-center text-center">
                    <span>{count}</span>
                </div>
                <button onClick={onPlus} className="bg-white box-border w-[24px] h-[24px]"><Plus /></button>
            </div>
            <div className="mt-[10px]">
                <span className="text-[18px] font-bold">
                    <em className="not-italic"></em>
                    <span>{salePrice.toLocaleString()}원</span>
                </span>
            </div>
        </div>
    )
}