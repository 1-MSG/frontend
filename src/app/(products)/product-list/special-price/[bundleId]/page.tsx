import bundleDetail from '@/app/(commonAccess)/dummydata/bundleDatail.json'
import Advertisement from '@/components/pages/product-list/special-price/advertisement'
import SpecialPriceInfo from '@/components/pages/product-list/special-price/specialPriceInfo'
import SpecialPriceList from '@/components/pages/product-list/special-price/specialPriceList'

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
            </div>
        </main>
    )
}