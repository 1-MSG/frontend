import categoryList from '@/app/(commonAccess)/dummydata/category.json'
import productList from '@/app/(commonAccess)/dummydata/productList.json'
import CategoryTap from '@/components/pages/product-list/categoryTab'
import ProductConetent from '@/components/pages/product-list/productContent'
import RankingTab from '@/components/pages/product-list/ranking/rankingTab'
import DepartmentIcon from '@/images/svgs/DepartmentIcon'
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon'

export default function Page() {

    return (
        <main>
            {/* 랭킹 탭 */}
            <RankingTab/>

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

            <ProductConetent productList={productList}/>
        </main>
    )
}