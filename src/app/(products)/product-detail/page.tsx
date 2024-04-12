import Data from '@//dummydata/product_detail_data.json';
import Share from '@/images/svgs/Share';
import ProductImgSwiper from '@/components/pages/product-detail/productImgSwiper';
import ProductInfo from '@/components/pages/product-detail/productInfo';
import ProductDetailInfo from '@/components/pages/product-detail/productDetailInfo';
import CustomerReview from '@/components/pages/product-detail/customerReview';
import MarketingBanner from '@/components/pages/product-detail/marketingBanner';
import ProductDetailLead from '@/components/pages/product-detail/productDetailLead';
import { CommonDataResType } from '@/types/commonResType';
import CustomerReviewLead from '@/components/pages/product-detail/CustomerReviewLead';
import { Suspense } from 'react';

// 상품 정보 가져오기
async function getProductInfo(productId: number) {
    const res = await fetch(
        `${process.env.API_BASE_URL}/product/${productId}`,
        { cache: 'no-cache' },
    );
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

// 상품 이미지 가져오기
async function getProductImages(productId: number) {
    const res = await fetch(
        `${process.env.API_BASE_URL}/product/${productId}/images`,
        {
            cache: 'no-cache',
        },
    );
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const productId = searchParams.productId
        ? Number(searchParams.productId)
        : 0;

    const productInfo: CommonDataResType = await getProductInfo(productId);
    const productImages: CommonDataResType = await getProductImages(productId);

    //console.log(productInfo.data);
    //console.log(productImages.data);

    const Info = productInfo.data;
    const Images = productImages.data;

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                {/*<div className="h-[2000px] bg-slate-300">test</div>*/}

                {/* 상품 메인 이미지 */}
                <ProductImgSwiper Images={Images} />

                <div className="flex border-b border-[#f5f5f5]">
                    <div></div>
                    <Share />
                </div>

                {/* 상품 정보 */}
                <ProductInfo Info={Info} productId={productId} />

                <div className="border-t-[14px] border-[#f5f5f5]"></div>

                {/* 상품 상세 정보 */}
                <ProductDetailInfo productId={productId} />

                <div className="border-t-[14px] border-[#f5f5f5]"></div>

                {/* 고객 리뷰*/}
                <CustomerReviewLead productId={productId} />

                {/* 상품 고시 정보 + 마케팅 배너 */}
                <MarketingBanner productId={productId} />

                {/* 하단 구매하기 버튼 */}
                <ProductDetailLead productId={productId} Info={Info} />
            </Suspense>
        </main>
    );
}
