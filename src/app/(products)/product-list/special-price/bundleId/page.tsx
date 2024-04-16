import bundleDetail from '@/dummydata/bundleDatail.json'
import Advertisement from '@/components/pages/product-list/special-price/advertisement'
import SpecialRriceCustomerReview from '@/components/pages/product-list/special-price/specialPriceCustomerReview'
import SpecialPriceInfo from '@/components/pages/product-list/special-price/specialPriceInfo'
import SpecialPriceLead from '@/components/pages/product-list/special-price/specialPriceLead'
import SpecialPriceList from '@/components/pages/product-list/special-price/specialPriceList'
import SpecialPriceOrderFooter from '@/components/pages/product-list/special-price/specialPriceOrderFooter'
import { CommonDataResType } from '@/types/commonResType';

async function getSpecialPriceDetail(bundleId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/bundles/${bundleId}`, {cache: "no-cache"})
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();

}


export default async function Page({
    searchParams
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    let idx = 1;
    const bundleId = searchParams.bundleId ? Number(searchParams.bundleId) : 0;
    //const bundle = bundleDetail[0]

    const BundleInfo: CommonDataResType = await getSpecialPriceDetail(bundleId);
    const bundle = BundleInfo.data;

    // console.log(bundle);
    

    return (
        <main>
            <div>
                <SpecialPriceInfo bundle={bundle} />

                <div className='border-t-[14px] border-[#f5f5f5]'>
                    <div className="mt-[25px]">
                        <p className="mt-[4px] px-[16px] text-[14px] text-[#777777] tracking-[-0.07rem]">상품번호 : {bundleId}</p>
                        {bundle.bundleProductIds.map((productId: any, index: number) => (
                            <SpecialPriceList productId={productId} key={index} idx={idx++}/>
                        ))}
                    </div>
                </div>

                <div className='border-t-[14px] border-[#f5f5f5]'>
                    <Advertisement />
                </div>

                {/* <SpecialRriceCustomerReview bundle={bundle} />

                {/* 하단 구매하기 버튼 */}
                <SpecialPriceLead bundle={bundle} /> 
            </div>
        </main>
    )
}