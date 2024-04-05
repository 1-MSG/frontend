import CustomerReview from '@/components/pages/product-detail/customerReview';
import Data from '@//dummydata/product_detail_data.json'
// 상품 리뷰 가져오기
// async function getProductReviews(productId: number) {
//     const res = await fetch(`${process.env.API_BASE_URL}/product-review/${productId}/reviews`)
//     if (!res.ok) {
//         throw new Error('서버 오류');
//     }
//     return res.json();
// }

export default async function CustomerReviewLead({ productId }: { productId: number }) {

    //const productReviews:CommonDataResType = await getProductReviews(productId);
    //const Reviews = productReviews.data;    

    const data = Data[0];

    const Reviews: any[] = [];

    return (
        <div className='pb-[40px]'>
            <div className='pt-[40px] px-[16px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5] last:border-b-0'>
                <h3 className='inline-block border-b border-[#000]'>고객리뷰</h3>
            </div>
            {Reviews.length == 0 ?
                <p className='px-[16px] text-[14px] text-[#999999]'>&#183;  아직 등록된 리뷰가 없습니다.</p>
                :
                <CustomerReview giveData={data} />}
        </div>
    )
}