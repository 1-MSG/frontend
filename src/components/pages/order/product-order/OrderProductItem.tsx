import { CommonDataResType } from '@/types/commonResType';
import Image from 'next/image';

// 상품 정보 가져오기
async function getProductInfo(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

// 상품 이미지 가져오기
async function getProductImages(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}/image`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function OrderProductItem({price, orderList}: {price: any, orderList: any}) {

    //console.log(price);
    //console.log("orderList ", orderList);
    
    

    const productInfo: CommonDataResType = await getProductInfo(price.productId);
    const productImages:CommonDataResType = await getProductImages(price.productId);

    const product = productInfo.data;
    const Images = productImages.data;

    //console.log(product);

    return (
        <div  className='grid grid-cols-7 py-[20px] border-b border-[#f0f0f0]'>
            <div className="col-span-2 align-top">
                <Image src={Images.productImageUrl} alt={Images.productImageDescription} width={200} height={200} className="" />
            </div>
            <div className="col-span-5 ml-[10px]">
                <p className="text-[14px]">
                    <span className="font-bold">{product.productBrand}</span>
                    <span className=""> {product.productName}</span>
                </p>
                <p className="mt-[5px] text-[12px] text-[#888888]">
                    <span>{orderList.parentName} / {orderList.optionName}</span> <span className=' hidden'>{orderList.optionId}</span>
                </p>
                <div className="mt-[5px] w-full flex justify-between">
                    <div className="text-[14px]">
                        <em className="text-[#888888] not-italic line-through">{(product.productPrice * price.count).toLocaleString()}원</em>
                        <em className="ml-[4px] not-italic font-extrabold">{(product.discountPrice * price.count).toLocaleString()}원</em>
                    </div>
                    <div className="text-[12px] text-[#888888]">
                        수량 <em className='not-italic'>{price.count}</em>개
                    </div>
                </div>
            </div>
        </div>
    )
}