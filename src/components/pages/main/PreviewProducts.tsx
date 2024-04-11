import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import { ProductIdListByCategoryType } from "@/types/productDataType";
import ProductCardTypeItem from "../product-list/ProductCardTypeItem";
import { CommonDataResType } from "@/types/commonResType";


async function getRandom() {
    const res = await fetch(`${process.env.API_BASE_URL}/random`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function PreviewProducts() {

    const productList:CommonDataResType = await getRandom();
    const product = productList.data;

    //console.log('product', product);

    if(product.length % 2 != 0) product.pop();
    
    
    return (
        <>
            <div style={{ padding: '12px' }}>
                <Image src={Adv1} alt='' />
            </div>
            <div style={{ padding: '12px' }}>
                <h2 style={{ fontSize: '19px', fontWeight: 'bold' }}>오늘의 인기 상품</h2>
            </div>

            <div className='grid grid-cols-2 gap-2 mx-[16px]'>
                {product.map((item: ProductIdListByCategoryType, index: number) => (
                    <ProductCardTypeItem productId={item.productId} key={index} />
                ))}
            </div>

        </>
    );
}
