import Image from 'next/image';
import Adv1 from '@/assets/image/mainadvertisement/adv1.png';
// import {
//     ReactElement,
//     JSXElementConstructor,
//     ReactNode,
//     ReactPortal,
//     PromiseLikeOfReactNode,
//     Key,
// } from 'react';
import { ProductIdListByCategoryType } from '@/types/productDataType';
import ProductCardTypeItem2 from '../product-list/ProductCardTypeItem2';
import { CommonDataResType } from '@/types/commonResType';

async function getRandom() {
    const res = await fetch(`${process.env.API_BASE_URL}/random`);
    // console.log('res', res);
    const data: CommonDataResType = await res.json();
    if (data.isSuccess === false) {
        console.error('조회 실패');
    }
    return data.data;
}

export default async function PreviewProducts() {
    const product = await getRandom();

    //console.log('product', product);

    if (product.length % 2 != 0) product.pop();

    return (
        <>
            <div style={{ padding: '12px' }}>
                <Image src={Adv1} alt="" />
            </div>
            <div style={{ padding: '12px' }}>
                <h2 style={{ fontSize: '19px', fontWeight: 'bold' }}>
                    오늘의 상품
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 mx-[16px]">
                {product.map(
                    (item: ProductIdListByCategoryType, index: number) => (
                        <ProductCardTypeItem2
                            productId={item.productId}
                            key={index}
                        />
                    ),
                )}
            </div>
        </>
    );
}
