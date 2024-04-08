import { CommonDataResType } from '@/types/commonResType';

// 상품 상세 정보 가져오기
async function getProductDetail(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}/detail`, {
        cache: 'no-cache',
    })
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function ProductDetailInfo({ productId }: { productId: number }) {

    const productDetail: CommonDataResType = await getProductDetail(productId);
    const Detail = productDetail.data;

    return (
        <>
            <div className='pb-[20px] pl-[16px] pr-[16px]' >
                <div className='pt-[40px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5]'>
                    <h3 className='inline-block border-b border-[#000]'>상세정보</h3>
                </div>
                <ul className='pb-[20px] pr-[16px] text-[14px] font-medium text-[#777777] border-b border-[#f5f5f5] '>
                    <li>상품번호 : {productId}</li>
                </ul>
            </div>
            <div className='pl-[16px] pr-[16px] pb-[20px] border-b-[14px] border-[#f5f5f5]'>
                <div dangerouslySetInnerHTML={{ __html: Detail }}></div>
            </div>
        </>
    )
}