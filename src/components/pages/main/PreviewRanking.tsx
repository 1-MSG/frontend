// import Image from 'next/image';
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

async function getRanking() {
    const res = await fetch(`https://sssg.shop/api/v1/ranking?page=1&size=12&sort=`);
    // console.log('res', res);
    const data: CommonDataResType = await res.json();
    if (data.isSuccess === false) {
        console.error('조회 실패');
    }
    return data.data;
}


export default async function PreviewRanking() {
    
    const product = await getRanking();

    // console.log('product', product);

    if (product.productList.length % 2 != 0) product.productList.pop();

    return (
        <>
            <div style={{ padding: '12px' }}>
                <h2 style={{ fontSize: '19px', fontWeight: 'bold' }}>
                    오늘의 베스트 상품
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 mx-[16px]">
                {product.productList.map(
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