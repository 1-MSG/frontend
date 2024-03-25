import categoryList from "@/app/(commonAccess)/dummydata/categoryDetail.json"
import CategoryTab from "@/components/pages/catogory-list/categoryTab"
import productList from "@/app/(commonAccess)/dummydata/productList.json"
import ProductConetent from "@/components/pages/product-list/productContent"

export default function Page() {
    
    return(
        <main>
            <div className="mx-[16px]">
                <CategoryTab categoryList={categoryList}/>
            </div>
            <ProductConetent productList={productList}/>
        </main>
    )
}