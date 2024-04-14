import CategoryTab from '@/components/pages/product-list/categoryTab'
import RankingTab from '@/components/pages/product-list/ranking/rankingTab'
import DepartmentIcon from '@/images/svgs/DepartmentIcon'
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon'
import { CommonDataResType } from '@/types/commonResType';
import { CategoryDataType } from "@/types/categoryDataType";
import RankingProductList from '@/components/pages/product-list/ranking/RankingProductList';

async function fetchData(){
    const res = await fetch(`${process.env.API_BASE_URL}/category?level=0`, {
        next: { revalidate: 3600*24 }
    });

    return res.json();
};

export default async function Page() {

    const result: CommonDataResType = await fetchData();
    console.log(result.data)

    const categoryList: CategoryDataType[] = result.data;
    
    return (
        <main>
            {/* 랭킹 탭 */}
            <RankingTab/>

            {/* 카테고리 탭 */}
            <CategoryTab categoryList={categoryList}/>

            <div>
                <div className='my-[10px] pr-[16px] flex'>
                    <div className='flex pl-[16px]'>
                        <div><SsgDeliveryIcon/></div>
                        <div className='ml-[6px]'><DepartmentIcon/></div>                       
                    </div>
                </div>
            </div>

            <RankingProductList/>
        </main>
    )
}