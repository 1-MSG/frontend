import LeftNav from "@/components/layout/LeftNav";
import RightNav from "@/components/layout/RightNav";
import CategoryHeader from "@/components/pages/category/CategoryHeader";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <CategoryHeader/>
            {children}
            <LeftNav/>
            <RightNav/>
        </>
    );

}