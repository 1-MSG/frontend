import categoryList from "@/dummydata/categoryDetail.json"
import CategoryTab from "@/components/pages/catogory-list/categoryTab"
import productList from "@/dummydata/productList.json"
import ProductConetent from "@/components/pages/product-list/productContent"
import CategoryListHeader from "@/components/pages/catogory-list/categoryListHeader"
import CategorySmallTab from "@/components/pages/catogory-list/CategorySmallTab"

async function getCategoryLid(categoryId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryId}`)
    
    return res.json();
}

async function getCategoryList(categoryLid: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryLid}`, {
        next: { revalidate: 3600*24 }
    })
    return res.json();
}

export default async function Page({
    searchParams
} : {
    searchParams: { [key: string]: string | string[] | undefined } 
}) {

    console.log(searchParams);
    //const categoryLId = searchParams.categoryLid ? Number(searchParams.categoryLid) : 0;
    //const categoryMid = searchParams.categoryMid ? Number(searchParams.categoryMid) : 0;

    const categoryId = searchParams.categoryId ? Number(searchParams.categoryId) : 0;
    const categoryLid = await getCategoryLid(categoryId);
    //console.log("categoryLid.data", categoryLid.data.subCategories);
    const categoryListData = await getCategoryList(categoryLid.data.parentId);
    //console.log("categoryListData.data", categoryListData.data)

    const categoryList = categoryListData.data.subCategories;
    categoryList.shift();
    //console.log(categoryList);

    const categorySmallTabList = categoryLid.data.subCategories;
    categorySmallTabList.shift();

    let categoryName;
    for(let i=0; i<categoryList.length; i++){
        if(categoryList[i].categoryId === categoryId){
            categoryName = categoryList[i].categoryName;
            break;
        }
    }
    

    return (
        <>
            <CategoryListHeader categoryLid={categoryLid.data} categoryId={categoryId} categoryName={categoryName}/>
            <main>
                <CategoryTab categoryList={categoryList}/>
                <CategorySmallTab subCategories={categorySmallTabList}/>
                {/* <ProductConetent categoryId={categoryId}/> */}
            </main>
        </>
  )
}