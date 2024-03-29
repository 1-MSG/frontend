import bundleDetail from '@/dummydata/bundleDatail.json'
import Advertisement from '@/components/pages/product-list/special-price/advertisement'
import SpecialRriceCustomerReview from '@/components/pages/product-list/special-price/specialPriceCustomerReview'
import SpecialPriceInfo from '@/components/pages/product-list/special-price/specialPriceInfo'
import SpecialPriceLead from '@/components/pages/product-list/special-price/specialPriceLead'
import SpecialPriceList from '@/components/pages/product-list/special-price/specialPriceList'
import SpecialPriceOrderFooter from '@/components/pages/product-list/special-price/specialPriceOrderFooter'


export default function Page() {
    const bundle = bundleDetail[0]

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