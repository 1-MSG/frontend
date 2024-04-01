import CartIcon from "@/images/svgs/CartIcon";
import GrayStar from "@/images/svgs/GrayStar";
import LikeTrue from "@/images/svgs/LikeTrue";
import { LikeDataType } from "@/types/likeDataType";
import Image from "next/image";
import Link from "next/link";

export default function LikeItem({ list }: { list: LikeDataType }) {

    const product_img_url = "https://sitem.ssgcdn.com/06/15/78/item/1000578781506_i1_1100.jpg"
    const product_price = 100000
    let product_rate = 10
    const product_brand = "나이키"
    const product_name = "화이트 운동화"
    const product_star = 4.5
    const product_review_count = 123453


    function Rate(price: number, rate: number) {
        let n = (100 - rate) / 100;
        return (
            <div>
                <p className='line-through text-[#969696] text-[12px]'>{price.toLocaleString()}원</p>
                <div className='inline-block items-center mt-[2px] text-[15px] font-bold'>
                    <p className='mr-[4px] float-left text-[#ff5452]'>{rate}%</p>
                    <p className='float-left'>{(price * n).toLocaleString()}원</p>
                </div>
            </div>
        )
    }

    function NotRate(price: number) {
        return (
            <div className='inline-block items-center'>
                <p className='float-left text-[16px] font-bold'>{price.toLocaleString()}원</p>
            </div>
        )
    }


    return (
        <>
            <div className="inline-block tracking-[-0.07rem]">
                
                <Link href="" className="w-full h-auto object-cover overflow-hidden">
                    <Image src={product_img_url} width={500} height={500} alt="" />
                </Link>
                <div>
                    <div className="flex">
                        <div className="w-[60%]"></div>
                        <div className="flex items-center">
                            <span className="w-[40%]"><LikeTrue /></span>
                            <span><CartIcon w={33} h={33} /></span>
                        </div>
                    </div>
                    <Link href="" className="pt-[2px] pr-[20px] leading-[16px]">
                        <p className='text-[13px]'>
                            <span className='font-bold'>{product_brand} </span>
                            {product_name}</p>
                        <div className='mt-[4px]'>
                            {product_rate == 0 ? NotRate(product_price) : Rate(product_price, product_rate)}
                        </div>
                        <div className=' text-[#777777] text-[12px] items-center mt-[4px]'>
                            <div className='float-left pt-[3px]'><GrayStar /></div>
                            <p className='float-left ml-[4px]'>{product_star}</p>
                            <p className='float-left ml-[4px] text-[#ededed] text-[10px]' >|</p>
                            <p className='float-left ml-[4px]'>{product_review_count.toLocaleString()}건</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}