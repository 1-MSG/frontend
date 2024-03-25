import CategoryListHeader from "@/components/pages/catogory-list/categoryListHeader";
import categoryList from "@/app/(commonAccess)/dummydata/categoryDetail.json"

export default function Layout({children} : {children : React.ReactNode}) {
    return(
        <>
            <CategoryListHeader/>
            {children}
        </>
    )
}
