import categoryList from "@/dummydata/categoryDetail.json"
import CategoryTab from "@/components/pages/catogory-list/categoryTab"
import productList from "@/dummydata/productList.json"
import ProductConetent from "@/components/pages/product-list/productContent"
import CategoryListHeader from "@/components/pages/catogory-list/categoryListHeader"

async function getCategoryList(categoryId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/category-product?categoryId=${categoryId}`, {
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
    const categoryId = searchParams.categoryId ? Number(searchParams.categoryId) : 0;
    const categoryListData = await getCategoryList(categoryId);
    console.log(categoryListData.data)

    return (
        <>
            <CategoryListHeader />
            <main>
                <CategoryTab categoryList={categoryListData.data}/>
                <ProductConetent categoryId={categoryId}/>
            </main>
        </>
  )
}