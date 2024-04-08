import bundleDetail from '@/dummydata/bundleDatail.json'
import Advertisement from '@/components/pages/product-list/special-price/advertisement'
import SpecialRriceCustomerReview from '@/components/pages/product-list/special-price/specialPriceCustomerReview'
import SpecialPriceInfo from '@/components/pages/product-list/special-price/specialPriceInfo'
import SpecialPriceLead from '@/components/pages/product-list/special-price/specialPriceLead'
import SpecialPriceList from '@/components/pages/product-list/special-price/specialPriceList'
import SpecialPriceOrderFooter from '@/components/pages/product-list/special-price/specialPriceOrderFooter'
import { CommonDataResType } from '@/types/commonResType';

async function getSpecialPriceDetail(bundleId:number) {
    const res = await fetch(`${process.env.API_BASE_URL}/bundles/${bundleId}`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();

}


export default async function Page({
    searchParams
} : {
    searchParams: { [key: string]: string | string[] | undefined } 
}) {
    const bundleId = searchParams.bundleId ? Number(searchParams.bundleId) : 0;
    const bundle = bundleDetail[0]

    const BundleInfo:CommonDataResType = await getSpecialPriceDetail(bundleId);

    console.log(BundleInfo.data);
    

    return (
        <main>
            <div>
                <SpecialPriceInfo bundle={bundle}/>

                <div className='border-t-[14px] border-[#f5f5f5]'>
                    <SpecialPriceList bundle={bundle} />
                </div>

                <div className='border-t-[14px] border-[#f5f5f5]'>
                    <Advertisement />
                </div>

                <SpecialRriceCustomerReview bundle={bundle} />

                {/* 하단 구매하기 버튼 */}
                <SpecialPriceLead bundle={bundle}/>
            </div>
        </main>
    )
}