
import { CategoryDataType } from "@/types/categoryDataType";
import CategoryTheme from "@/components/pages/category/CategoryTheme";
import CategoryListItem from "@/components/pages/category/CategoryListItem";
import { CommonDataResType } from '@/types/commonResType';

async function fetchData(){
    const res = await fetch(`${process.env.API_BASE_URL}/category?level=0`, {
        next: { revalidate: 3600*24 }
    });

    //console.log(res);
    
    return res.json();

    //const res = categoryData;
    //return res.cetegory_list; 
};


export default async function Page() {

    const result: CommonDataResType = await fetchData();
    //console.log(result.data)

    const categoryList: CategoryDataType[] = result.data;

    

    return (
        <main>
            <div style={{ background: 'linear-gradient(to right, red, #B404AE, purple)', width: '100%', height: '1.5px' }}></div>

            <div className="mt-[16px] mb-[50px]">
                <CategoryListItem categoryList={categoryList} />
            </div>

            <CategoryTheme />
        </main>
    );
}