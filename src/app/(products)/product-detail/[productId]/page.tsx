import data from '@//dummydata/product_detail_data.json'
import Share from '@/images/svgs/Share';
import ProductImgSwiper from '@/components/pages/product-detail/productImgSwiper';
import ProductInfo from '@/components/pages/product-detail/productInfo';
import ProductDetailInfo from '@/components/pages/product-detail/productDetailInfo';
import CustomerReview from '@/components/pages/product-detail/customerReview';
import MarketingBanner from '@/components/pages/product-detail/marketingBanner';
import ProductDetailLead from '@/components/pages/product-detail/productDetailLead';


export default function Page() {

    const giveData = data[0];

    return (
        <main>
            {/*<div className="h-[2000px] bg-slate-300">test</div>*/}

            {/* 상품 메인 이미지 */}
            <ProductImgSwiper />

            <div className='flex border-b border-[#f5f5f5]'>
                <div></div>
                <Share />
            </div>

            {/* 상품 정보 */}
            <ProductInfo giveData={data} />

            {/* 상품 상세 정보 */}
            <ProductDetailInfo giveData={data} />

            {/* 고객 리뷰 */}
            <CustomerReview giveData={data} />

            {/* 상품 고시 정보 + 마케팅 배너 */}
            <MarketingBanner giveData={data} />

            {/* 하단 구매하기 버튼 */}
            <ProductDetailLead giveData={data}/>

        </main>
    );
}