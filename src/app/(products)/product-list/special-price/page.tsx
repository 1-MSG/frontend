import categoryList from '@/app/(commonAccess)/dummydata/category.json'
import CategoryTap from '@/components/pages/product-list/categoryTab'
import RankingTab from '@/components/pages/product-list/special-price/rankingTap'
import DepartmentIcon from '@/images/svgs/DepartmentIcon'
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon'
import specialPriceList from '@/app/(commonAccess)/dummydata/specialPriceData.json'
import SpecialPriceContent from '@/components/pages/product-list/special-price/specialPriceContent'

export default function Page() {

    return (
        <main>
            {/* 랭킹 탭 */}
            <RankingTab />

            {/* 카테고리 탭 */}
            <CategoryTap categoryList={categoryList}/>

            <div>
                <div className='my-[10px] pr-[16px] flex'>
                    <div className='flex pl-[16px]'>
                        <div><SsgDeliveryIcon/></div>
                        <div className='ml-[6px]'><DepartmentIcon/></div>                       
                    </div>
                </div>
            </div>

            <SpecialPriceContent specialPriceList={specialPriceList}/>
        </main>
    )
}