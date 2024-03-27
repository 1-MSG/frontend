import { useState } from "react";
import Minus from "@/images/svgs/Minus"
import Plus from "@/images/svgs/Plus"

export default function SpecialPriceCount(props:any) {
    
    const product_price = props.product_price;
    const discount_rate = props.discount_rate;
    const {getPrice2} = props
    const index = props.index
    
    const [count, setCount] = useState(1);

    const onMinus = () => {
        if (count == 1) setCount(1)
        else setCount(count - 1);
    }

    const onPlus = () => {
        setCount(count + 1);
    }

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const price = count * (product_price * ((100 - discount_rate) / 100));
    getPrice2(index, price);
    

    return (
        <div className="flex">
            <div className="mt-[25px] h-[33px] flex">
                <button onClick={onMinus} className="bg-white w-[24px] h-[24px] text-center mr-[1px]"><Minus /></button>
                <div className="bg-white text-[14px] leading-[33px] w-[34px] h-[24px] content-center text-center">
                    <span>{count}</span>
                </div>
                <button onClick={onPlus} className="bg-white box-border w-[24px] h-[24px] ml-[1px]"><Plus /></button>
            </div>
            <div className="mt-[10px]">
                <span className="text-[18px] font-bold">
                    <em className="not-italic"></em>
                    <span>{priceToString(price)}원</span>
                </span>
            </div>
        </div>
    )
}