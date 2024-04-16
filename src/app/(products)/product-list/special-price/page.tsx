import categoryList from '@/dummydata/category.json'
import CategoryTab from '@/components/pages/product-list/categoryTab'
import RankingTab from '@/components/pages/product-list/special-price/rankingTab'
import DepartmentIcon from '@/images/svgs/DepartmentIcon'
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon'
import specialPriceList from '@/dummydata/specialPriceData.json'
import SpecialPriceContent from '@/components/pages/product-list/special-price/specialPriceContent'
import { CommonDataResType } from '@/types/commonResType';
import { CategoryDataType } from "@/types/categoryDataType";
import { BundleDataType } from '@/types/bundleDataType'
import SpecialPriceListItem from '@/components/pages/product-list/special-price/SpecialPriceListItem'


async function fetchData() {
    const res = await fetch(`${process.env.API_BASE_URL}/category?level=0`, {
        next: { revalidate: 3600 * 24 }
    });

    return res.json();
};

async function getSpecialPriceList() {
    const res = await fetch(`${process.env.API_BASE_URL}/bundles?page=0&size=12`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}


export default async function Page() {

    const result: CommonDataResType = await fetchData();
    const specialPriceListData: CommonDataResType = await getSpecialPriceList();
    //console.log(result.data)
    //console.log(specialPriceListData.data);

    const categoryList: CategoryDataType[] = result.data;
    const specialPriceList = specialPriceListData.data;
    const specialPrice: BundleDataType[] = specialPriceList.bundles;

    //console.log(specialPrice);
    

    return (
        <main className='mb-[20px]'>
            {/* 랭킹 탭 */}
            <RankingTab />

            {/* 카테고리 탭 */}
            <CategoryTab categoryList={categoryList} />

            <div>
                <div className='my-[10px] pr-[16px] flex'>
                    <div className='flex pl-[16px]'>
                        <div><SsgDeliveryIcon /></div>
                        <div className='ml-[6px]'><DepartmentIcon /></div>
                    </div>
                </div>
            </div>


            <SpecialPriceListItem />

        </main>
    )
}