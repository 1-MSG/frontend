import Link from "next/link"
import Image from "next/image"
import Like from "@/images/svgs/Like";
import CartIcon from "@/images/svgs/CartIcon";
import GrayStar from "@/images/svgs/GrayStar";

async function getProductData(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}


export default async function ProductCardTypeItem({productId}: {productId: number}) {

    const productData = await getProductData(productId);
    console.log(productData);

    function Rate(price:number, rate:number) {
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

    function NotRate(price:number) {
        return (
            <div className='inline-block items-center'>
                <p className='float-left text-[16px] font-bold'>{price.toLocaleString()}원</p>
            </div>
        )
    }


    return (
        <div className='pt-[10px] pb-[20px]'>
            <Link href='/product-detail/1'>
                <Image src={productData.product_img}
                    alt=''
                    width={175}
                    height={175}
                    className='' />
            </Link>

            <div className='flex mt-[3px] py-[2px]'>
                <div></div>
                <div className='flex'>
                    <button className='w-[20px] mr-[5px]'><Like w={20} h={20} /></button>
                    <button className='mr-[3px]'><CartIcon w={26} h={26} /></button>
                </div>
            </div>

            <Link href='/product-productData/1' className='mt-[10px] pr-[20px] leading-[16px]'>
                <p className='text-[13px]'>
                    <span className='font-bold'>{productData.product_brand} </span>
                    {productData.product_name}</p>
                <div className='mt-[4px]'>
                    {productData.product_rate == 0 ? NotRate(productData.product_price) : Rate(productData.product_price, productData.product_rate)}
                </div>
                <div className=' text-[#777777] text-[12px] items-center mt-[4px]'>
                    <div className='float-left pt-[3px]'><GrayStar /></div>
                    <p className='float-left ml-[4px]'>{productData.product_star}</p>
                    <p className='float-left ml-[4px] text-[#ededed] text-[10px]' >|</p>
                    <p className='float-left ml-[4px]'>{productData.product_review_count.toLocaleString()}건</p>
                </div>
            </Link>
        </div>
    )
}

