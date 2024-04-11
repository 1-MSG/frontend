import Like from "@/images/svgs/Like";
import Image from "next/image";
import Link from "next/link";
import { CommonDataResType } from '@/types/commonResType';

async function getBundleProduct(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}`, {cache: "no-cache"})
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

async function getBundleProductImage(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}/image`, {cache: "no-cache"})
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function SpecialPriceList({ productId, idx}: { productId: number, idx: number}){

        const productData: CommonDataResType = await getBundleProduct(productId);
        const imageData: CommonDataResType = await getBundleProductImage(productId);

        const product = productData.data;
        const image = imageData.data;

        //console.log("productData ", productData.data);
        //console.log("imageData ", imageData.data);
        


        return (

            <div className="px-[16px] pt-[10px] pb-[20px]">
                <div className="pt-[6px] pb-[4px] border-t border-[#e5e5e5]">
                    <span className="text-[#222222] text-[12px] font-bold">상품 {idx}</span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-2">
                        <Image src={image.productImageUrl} width={100} height={100} alt='' />
                    </div>
                    <div className="col-span-4">
                        <Link href="" className="pt-[6px] pr-[8px] text-[13px] tracking-[-0.07rem] text-[#222222]">
                            <div>
                                <em className="not-italic font-extrabold"> {product.brandName} </em>
                                {product.productName}
                            </div>
                            <div className="mt-[4px] text-[#888888] line-through">
                                <p>{product.productPrice.toLocaleString()}원</p>
                                <div className='inline-block items-center text-[16px]'>
                                    <p className='mr-[5px] float-left text-[#ff5452] font-bold'>{product.discountRate.toLocaleString()}%</p>
                                    <p className='float-left text-[#222222] font-bold'>{product.discountPrice.toLocaleString()}원</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center content-center text-center">
                    <span className="text-[12px] text-[#777777]"></span>
                    <div className="flex">
                        <div className="border border-[#222222] text-[13px] h-[30px] mr-[7px] px-[27px] justify-center content-center">상품 선택하기</div>
                        <div className="m-auto"><Like w={20} h={20} /></div>
                    </div>
                </div>
            </div>

        )
    }